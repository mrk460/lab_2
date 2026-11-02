'use strict';

/* ---------- Налаштування ---------- */
const VARIANT = 17;                 // номер варіанта = номер у журналі
const MODAL_DELAY_MS = 60 * 1000;   // 1 хвилина
const DAY_START = 7;                // денна тема: 07:00–21:00
const DAY_END = 21;

/* ---------- 1. Дані про ОС та браузер у localStorage ---------- */
function saveSystemInfo() {
  const nav = navigator;
  const info = {
    userAgent: nav.userAgent,
    platform: nav.platform,
    vendor: nav.vendor,
    language: nav.language,
    languages: (nav.languages || []).join(', '),
    cookieEnabled: String(nav.cookieEnabled),
    onLine: String(nav.onLine),
    hardwareConcurrency: String(nav.hardwareConcurrency || ''),
    deviceMemory: String(nav.deviceMemory || ''),
    maxTouchPoints: String(nav.maxTouchPoints || 0),
    screen: `${screen.width}x${screen.height}`,
    colorDepth: String(screen.colorDepth),
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  if (nav.userAgentData) {
    info.uaBrands = nav.userAgentData.brands.map(b => `${b.brand} ${b.version}`).join(', ');
    info.uaMobile = String(nav.userAgentData.mobile);
    info.uaPlatform = nav.userAgentData.platform;
  }
  try {
    Object.entries(info).forEach(([key, value]) => localStorage.setItem(key, value));
  } catch (e) {
    console.error('localStorage недоступний:', e);
  }
}

function renderStorageInfo() {
  const list = document.getElementById('storage-info');
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement('li');
    const strong = document.createElement('strong');
    strong.textContent = key + ': ';
    li.append(strong, document.createTextNode(localStorage.getItem(key)));
    list.appendChild(li);
  }
}

/* ---------- 2. Відгуки з JSONPlaceholder ---------- */
async function loadReviews() {
  const status = document.getElementById('reviews-status');
  const container = document.getElementById('reviews-list');
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();   // масив у порядку отримання
    status.hidden = true;
    comments.forEach(c => {
      const card = document.createElement('article');
      card.className = 'review';
      const title = document.createElement('h3');
      title.textContent = c.name;
      const author = document.createElement('p');
      author.className = 'author';
      author.textContent = c.email;
      const body = document.createElement('p');
      body.textContent = c.body;
      card.append(title, author, body);
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Помилка завантаження відгуків:', error);
    status.textContent = 'Не вдалося завантажити відгуки. Спробуйте пізніше.';
  }
}

/* ---------- 3. Модальне вікно через 1 хвилину ---------- */
function setupModal() {
  const modal = document.getElementById('feedback-modal');
  const closeBtn = document.getElementById('modal-close');
  const DISMISSED_KEY = 'feedbackDismissed';

  const close = () => {
    modal.hidden = true;
    sessionStorage.setItem(DISMISSED_KEY, '1');   // не показувати знову в цій сесії
  };
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });

  if (sessionStorage.getItem(DISMISSED_KEY)) return;
  setTimeout(() => { modal.hidden = false; }, MODAL_DELAY_MS);
}

/* ---------- 4. Нічний/денний режим ---------- */
function themeByTime(date = new Date()) {
  const h = date.getHours();
  return h >= DAY_START && h < DAY_END ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  btn.textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

function setupTheme() {
  applyTheme(themeByTime());   // автоматично за часом доби
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');   // ручне перемикання
  });
}

/* ---------- Ініціалізація ---------- */
document.addEventListener('DOMContentLoaded', () => {
  saveSystemInfo();
  renderStorageInfo();
  loadReviews();
  setupModal();
  setupTheme();
});
