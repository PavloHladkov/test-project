/*

Стилі написання імен змінних:
camelCase: Це коли кожне слово, крім першого, починається з великої літери, а всі решта літер малі. Наприклад: firstName, lastName, isLoggedIn.
snake_case: У цьому стилі кожне слово розділяється нижнім підкресленням. Наприклад: first_name, last_name, is_logged_in.
PascalCase: Всі слова починаються з великої літери, без роздільників. Наприклад: FirstName, LastName, IsLoggedIn.
UPPER_CASE: Всі літери в імені змінної написані великими літерами, а слова можуть бути розділені нижнім підкресленням. Наприклад: FIRST_NAME, LAST_NAME, IS_LOGGED_IN.
kebab-case: У цьому стилі кожне слово розділяється дефісом. Наприклад: first-name, last-name, is-logged-in. 

*/

// Завдання норма

// Task 1: Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”
let userName = prompt("Як вас звати?");
alert("Привіт, " + userName + "!");

// Task 2: Запитай рік народження користувача, порахуй його/її вік і виведи результат
const currentYear = 2024;
let birthYear = prompt("В якому році ви народилися?");
let age = currentYear - birthYear;
alert("Вам " + age + " років.");

// Task 3: Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let sideLength = prompt("Введіть довжину сторони квадрата (в метрах):");
let perimeter = 4 * sideLength;
alert("Периметр квадрата дорівнює " + perimeter + " метрів.");

// Завдання максимум

// Task 1: Запитай у користувача радіус кола і виведи площу такої окружності.
let radius = prompt("Введіть радіус кола (в метрах):");
let area = Math.PI * radius * radius;
alert("Площа кола дорівнює " + area.toFixed(2) + " метрів квадратних.");

// Task 2: Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let distance = prompt("Введіть відстань між містами у кілометрах:");
let time = prompt("За скільки годин ви хочете дістатися?");
let speed = distance / time;
alert("Вам потрібно рухатися зі швидкістю " + speed.toFixed(2) + " км/год.");

// Task 3: Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const exchangeRate = 0.85; // Курс долара до євро
let dollars = prompt("Введіть суму в доларах:");
let euros = dollars * exchangeRate;
alert(dollars + " доларів дорівнює " + euros.toFixed(2) + " євро.");
