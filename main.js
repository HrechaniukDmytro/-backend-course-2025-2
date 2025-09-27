const { URL } = require("url");

// Константи для запиту
const currency = "EUR";          // валюта
const exact_date = "10.09.2024"; // дата у форматі DD.MM.YYYY

// Базовий URL з параметром json
const baseUrl = new URL("https://bank.gov.ua/NBU_ovdp?json");

// Додаємо параметри до URL
baseUrl.searchParams.append("date", exact_date);
baseUrl.searchParams.append("val_code", currency);

// Вивід готового URL
console.log(baseUrl.href);