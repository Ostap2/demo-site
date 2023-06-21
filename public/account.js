// Підключення елементів з HTML
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Обробка події реєстрації
signupForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупинка стандартної поведінки форми

  // Отримання значень полів вводу
  const username = document.getElementById('username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Виклик функції реєстрації
  registerAccount(email, password, username);
});

// Обробка події входу
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупинка стандартної поведінки форми

  // Отримання значень полів вводу
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Виклик функції входу
  login(email, password);
});

// Функція реєстрації облікового запису
function registerAccount(email, password, username) {
  // Ваш код для реєстрації облікового запису
  console.log('Аккаунт зареєстровано успішно!');
  console.log('Електронна пошта: ' + email);
  console.log('Пароль: ' + password);
  console.log('Нікнейм: ' + username);
}

// Функція входу в систему
function login(email, password) {
  // Ваш код для входу в систему
  console.log('Успішний вхід в систему!');
  console.log('Електронна пошта: ' + email);
  console.log('Пароль: ' + password);
}










