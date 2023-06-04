// Using https://openweathermap.org/current#multi to get correct apiLang

export function getUserLanguage() {

  if (Object.keys(translations).includes(navigator.language) === true) {
    return navigator.language;
  }

  return null;
}

export const translations = {
  "en-US": {
    apiLang: "en",
    formattingLocale: "en-US",
    airQuality: "Качество воздуха",
    good: "Хороший",
    satisfactory: "Удовлетворительно",
    sensitive: "Чувствительный",
    unhealthy: "Нездоровый",
    veryUnhealthy: "очень нездоровый",
    hazardous: "Опасный",
    weatherIn: "Погода в",
    humidity: "Влажность",
    windSpeed: "Скорость ветра",
    sunrise: "Восход",
    sunset: "Закат",
    noWeatherFound: "Погода не найдена.",
    search: "Поиск",
    pleaseAddLocation: "Пожалуйста, добавьте местоположение.",
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    sunday: "Воскресенье",
    day: "День",
    night: "Ночь"
  },

};


translations["en"] = translations["en-US"];

