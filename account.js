// Підключення елементів з HTML
const signupForm = document.querySelector('.signup form');
const loginForm = document.querySelector('.login form');
const profileSection = document.querySelector('.profile');
const nickInfo = document.getElementById('nick-info');
const emailInfo = document.getElementById('email-info');
const logoutButton = document.getElementById('logout-btn');

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

// Обробка події виходу з аккаунта
logoutButton.addEventListener('click', function() {
  logout();
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
  showMessage('Аккаунт успішно створено');
  
  // Ваш код для реєстрації облікового запису
  console.log('Аккаунт зареєстровано успішно!');
  console.log('Електронна пошта: ' + email);
  console.log('Нікнейм: ' + username);

  // Показувати секцію профілю після реєстрації
  profileSection.style.display = 'block';
}

// Функція входу в систему
function login(email, password) {
  // Ваш код для входу в систему
  console.log('Успішний вхід в аккаунт!');
  console.log('Електронна пошта: ' + email);
  console.log('Пароль: ' + password);

  // Збереження аккаунта в localStorage
  const account = { email };
  localStorage.setItem('account', JSON.stringify(account));

  // Виведення повідомлення про успішний вхід
  showMessage('Успішний вхід в аккаунт!');

  // Показувати секцію профілю після входу
  profileSection.style.display = 'block';
}

// Функція виходу з аккаунта
function logout() {
  // Видалення аккаунта з localStorage
  localStorage.removeItem('account');

  // Очищення текстового вмісту елементів профілю
  nickInfo.textContent = '';
  emailInfo.textContent = '';

  // Приховування секції профілю після виходу
  profileSection.style.display = 'none';

  // Виведення повідомлення про успішний вихід
  showMessage('Ви вийшли з аккаунта');
}

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
