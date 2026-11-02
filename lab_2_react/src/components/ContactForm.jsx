import { useEffect, useState } from 'react';

// Замініть YOUR_FORM_ID на endpoint зі свого акаунта Formspree
const FORMSPREE_ACTION = 'https://formspree.io/f/YOUR_FORM_ID';
const DISMISSED_KEY = 'feedbackDismissed';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // не показувати знову, якщо користувач уже закрив вікно в цій сесії
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const timerId = setTimeout(() => setIsOpen(true), 60000); // 1 хвилина
    return () => clearTimeout(timerId); // очищення при розмонтуванні
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(DISMISSED_KEY, '1');
  };

  return (
    <>
      {isOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="feedback-title">
          <div className="modal-content">
            <h2 id="feedback-title">Зворотний зв'язок</h2>
            <form action={FORMSPREE_ACTION} method="POST">
              <label>
                Ім'я
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Номер телефону
                <input type="tel" name="phone" required />
              </label>
              <label>
                Повідомлення
                <textarea name="message" rows="4" required />
              </label>
              <div className="modal-actions">
                <button type="submit">Надіслати</button>
                <button type="button" onClick={handleClose}>Закрити</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
