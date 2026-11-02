# Лабораторна №4 — JavaScript (варіант 17)

## Що додано
Частина 1 (чистий JS):
- `index.html` — оновлено (відгуки, футер, модальне вікно, кнопка теми)
- `css/style.css`, `js/script.js`

Частина 2 (React, `lab_2_react/src/`):
- `components/Footer.jsx`, `Reviews.jsx`, `ContactForm.jsx`, `ThemeToggle.jsx`
- `App.example.jsx` — приклад підключення (перенесіть у свій `App.jsx`)
- `lab4.css` — стилі (додайте до `index.css`)

## Перед здачею
1. Зареєструйтеся на formspree.io, створіть форму й замініть `YOUR_FORM_ID`
   у `index.html` та в `ContactForm.jsx`.
2. Щоб швидко перевірити модальне вікно, тимчасово змініть 60000 / 60 * 1000 на 3000.

## Git
```bash
git clone https://github.com/mrk460/lab_2.git
cd lab_2
# скопіюйте сюди файли з цієї папки (index.html — із заміною; css/, js/, README_LAB4.md;
# а вміст lab_2_react/src/ — у вашу lab_2_react/src/)
git checkout -b lab4-javascript
git add .
git commit -m "Lab 4: JavaScript (localStorage, fetch, modal, theme) + React"
git push -u origin lab4-javascript
# або одразу в main:  git push origin main
```
