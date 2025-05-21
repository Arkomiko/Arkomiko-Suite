// Предполагается, что у вас есть кнопки или переключатель для выбора языка
// например, с id="lang-en" и id="lang-ru"

const localesPath = {
  en: 'locales/en.json',
  ru: 'locales/ru.json'
};

let currentTranslations = {};

async function loadLocale(locale) 
{
  const response = await fetch(localesPath[locale]);
  if (!response.ok) {
    console.error('Ошибка загрузки файла локализации:', response.status);
    return [];
  }
  return response.json();
}

function updateTexts() {
  document.querySelectorAll('loca').forEach(elem => {
    const id = elem.getAttribute('id');
    const translation = currentTranslations[id];
    if (translation) {
      elem.innerText = translation.translate;
    }
  });
}

async function setLanguage(locale) {
  currentTranslations = await loadLocale(locale);
  updateTexts();
}

// Обработчики кнопок
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-ru').addEventListener('click', () => setLanguage('ru'));

// Изначально можно установить английский или русский
setLanguage('en');