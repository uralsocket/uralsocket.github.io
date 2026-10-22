(() => {
  'use strict';
  const pages = {
    home: {
      en: ['CMPRS — Smaller videos. More room.', 'Minimal batch video compression for Mac. Ironclad quality, original resolution and frame timing, MOV files beside your originals. Free and open source.'],
      ru: ['CMPRS — Видео легче. Места больше.', 'Минималистичное приложение для пакетного сжатия видео на Mac. Ironclad, исходное разрешение и FPS, готовые MOV рядом с оригиналами. Бесплатно и с открытым кодом.']
    },
    support: {
      en: ['CMPRS — Support', 'CMPRS support: batch video compression for Mac, common questions, and developer contact.'],
      ru: ['CMPRS — Поддержка', 'Поддержка CMPRS: пакетное сжатие видео на Mac, частые вопросы и контакт разработчика.']
    },
    privacy: {
      en: ['CMPRS — Privacy', 'How CMPRS handles your videos, local logs, and support messages.'],
      ru: ['CMPRS — Конфиденциальность', 'Как CMPRS обрабатывает видео и информацию: локальные файлы, журналы и обращения в поддержку.']
    }
  };
  function setLanguage(language) {
    const lang = language === 'ru' ? 'ru' : 'en';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en][data-ru]').forEach(element => {
      element.innerHTML = element.dataset[lang];
    });
    document.querySelectorAll('[data-label-en]').forEach(element => {
      element.setAttribute('aria-label', element.getAttribute(`data-label-${lang}`));
    });
    document.querySelectorAll('[data-language-content]').forEach(element => {
      element.hidden = element.dataset.languageContent !== lang;
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === lang));
    });
    const content = pages[document.body.dataset.page]?.[lang];
    if (content) {
      document.title = content[0];
      document.querySelector('meta[name="description"]')?.setAttribute('content', content[1]);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', content[0]);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', content[1]);
    }
    try { localStorage.setItem('cmprs-language', lang); } catch (_) { /* The switch also works without storage. */ }
  }
  let initial = 'en';
  try { if (localStorage.getItem('cmprs-language') === 'ru') initial = 'ru'; } catch (_) { /* English is the default. */ }
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  setLanguage(initial);
})();
