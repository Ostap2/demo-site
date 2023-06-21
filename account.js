// Підключення елементів з HTML
const signupForm = document.querySelector('.signup form');
const loginForm = document.querySelector('.login-form');
const nickInfo = document.getElementById('nick-info');
const emailInfo = document.getElementById('Email-info');

// Обробка події реєстрації
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Зупинка стандартної поведінки форми

  // Отримання значень полів вводу
  const username = document.querySelector('.signup input[name="txt"]').value;
  const email = document.querySelector('.signup input[name="email"]').value;

  // Виклик функції реєстрації
  registerAccount(email, username);
});

// Обробка події входу
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Зупинка стандартної поведінки форми

  // Отримання значень полів вводу
  const email = document.querySelector('.login input[name="email"]').value;
  const password = document.querySelector('.login input[name="pswd"]').value;

  // Виклик функції входу
  login(email, password);
});

// Функція реєстрації облікового запису
function registerAccount(email, username) {
  // Зміна текстового вмісту елементів профілю
  nickInfo.textContent = username;
  emailInfo.textContent = email;

  // Збереження аккаунта в localStorage
  const account = { email, username };
  localStorage.setItem('account', JSON.stringify(account));

  // Виведення повідомлення про успішну реєстрацію
  showMessage('Дякуємо за реєстрацію!');
  
  // Ваш код для реєстрації облікового запису
  console.log('Аккаунт зареєстровано успішно!');
  console.log('Електронна пошта: ' + email);
  console.log('Нікнейм: ' + username);
}

// Функція входу в систему
function login(email, password) {
  // Ваш код для входу в систему

  // Виведення повідомлення про успішний вхід в аккаунт
  showMessage('Успішний вхід в аккаунт!');

  console.log('Успішний вхід в систему!');
  console.log('Електронна пошта: ' + email);
  console.log('Пароль: ' + password);
}

// Перевірка наявності збереженого аккаунта при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
  const account = localStorage.getItem('account');
  if (account) {
    const { email, username } = JSON.parse(account);
    nickInfo.textContent = username;
    emailInfo.textContent = email;
  }
});

// Функція виведення повідомлення
function showMessage(message) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message');
  messageContainer.textContent = message;
  document.body.appendChild(messageContainer);

  setTimeout(function() {
    messageContainer.remove();
  }, 3000);
}
