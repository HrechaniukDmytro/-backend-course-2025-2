// 1. Константи
const currency = "UAH";
const exact_date = "2024-09-10";

// 2. Базова адреса (корінь)
const baseUrl = "https://bank.gov.ua/ua/open-data/api/ovdp";

// 3. Створюємо URL-об'єкт
const url = new URL(baseUrl);

// 4. Додаємо параметри пошуку (query string)
url.searchParams.append("valcode", currency);

// 5. Виводимо у консоль
console.log("Сформований URL:", url.toString());

