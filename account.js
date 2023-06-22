// Підключення елементів з HTML
const signupForm = document.querySelector('.signup form');
const loginForm = document.querySelector('.login-form');
const nickInfo = document.getElementById('nick-info');
const emailInfo = document.getElementById('Email-info');

// Отримуємо посилання на елементи профілю
var nickInfoElement = document.getElementById('nick-info');
var emailInfoElement = document.getElementById('Email-info');

// Обробка події реєстрації
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Зупинка стандартної поведінки форми

  // Отримання значень полів вводу
  var username = document.querySelector('.signup input[name="txt"]').value;
  var email = document.querySelector('.signup input[name="email"]').value;

  // Виклик функції реєстрації
  registerAccount(email, username);
});

// Обробка події входу
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Зупинка стандартної поведінки форми

  // Отримання значень полів вводу
  var email = document.querySelector('.login input[name="email"]').value;
  var password = document.querySelector('.login input[name="pswd"]').value;

  // Виклик функції входу
  login(email, password);
});

// Функція реєстрації облікового запису
function registerAccount(email, username) {
  // Зміна текстового вмісту елементів профілю
  nickInfoElement.textContent = username;
  emailInfoElement.textContent = email;

  // Збереження аккаунта в localStorage
  var account = { email: email, username: username };
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

  // Збереження аккаунта в localStorage
  var account = { email: email, username: email }; // Замініть username на фактичний нікнейм користувача
  localStorage.setItem('account', JSON.stringify(account));

  // Оновлюємо дані в профілі
  updateProfile(email, email); // Замініть другий параметр на фактичний нікнейм користувача

  // Виведення повідомлення про успішний вхід в аккаунт
  showMessage('Успішний вхід в аккаунт!');

  console.log('Успішний вхід в систему!');
  console.log('Електронна пошта: ' + email);
  console.log('Пароль: ' + password);
}

// Оновлює дані в профілі
function updateProfile(email, username) {
  nickInfoElement.textContent = username;
  emailInfoElement.textContent = email;
}







var avatarImage = document.getElementById('avatar');
// Перевірка наявності збереженого аккаунта при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
  var account = localStorage.getItem('account');
  if (account) {
    var { email, username } = JSON.parse(account);
    updateProfile(email, username);
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

const logoutButton = document.getElementById('logout-btn');
var avatarImage = document.getElementById('avatar');

logoutButton.addEventListener('click', function() {
  // Очищення вмісту елементів профілю
  nickInfo.textContent = 'Nick';
  emailInfo.textContent = 'Email';

  // Скидання аватарки до початкового значення
  avatarImage.src = 'avatars/avatar1.jpg';

  // Виведення повідомлення про вихід з аккаунта
  showMessage('Ви вийшли з аккаунта.');

  console.log('Вихід з аккаунта.');
});









// Отримуємо елементи з HTML
const avatarContainer = document.getElementById('avatar-container');
const avatarImg = document.getElementById('avatar');
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');
const avatarUploadInput = document.getElementById('avatar-upload');
const avatarOptions = document.getElementsByClassName('avatar-option');

// Зчитуємо зображення аватарки з localStorage під час завантаження сторінки
window.addEventListener('load', () => {
  const storedAvatar = localStorage.getItem('selectedAvatar');
  if (storedAvatar) {
    avatarImg.src = storedAvatar;
  }
});

// Додаємо обробник події для кліку на аватарку
avatarContainer.addEventListener('click', () => {
  // Відкриваємо модальне вікно
  modal.style.display = 'block';
});

// Додаємо обробник події для кліку на кнопку "Закрити" в модальному вікні
modalCloseBtn.addEventListener('click', () => {
  // Закриваємо модальне вікно
  modal.style.display = 'none';
});

// Додаємо обробник події для кліку на зображення аватарки з каталогу
for (let i = 0; i < avatarOptions.length; i++) {
  avatarOptions[i].addEventListener('click', (event) => {
    const imageURL = event.target.src;
    avatarImg.src = imageURL;
    localStorage.setItem('selectedAvatar', imageURL); // Зберігаємо вибране зображення в localStorage
    modal.style.display = 'none';
  });
}

// Додаємо обробник події для зміни значення інпуту файлу
avatarUploadInput.addEventListener('change', () => {
  const file = avatarUploadInput.files[0];

  if (file) {
    const imageURL = URL.createObjectURL(file);
    avatarImg.src = imageURL;
    localStorage.setItem('selectedAvatar', imageURL); // Зберігаємо вибране зображення в localStorage
    modal.style.display = 'none';
  }
});

// Закриття модального вікна при кліку за його межами
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
function logout() {
  // Видалення збереженого аккаунта з localStorage
  localStorage.removeItem('account');
  localStorage.removeItem('selectedAvatar'); // Видалення збереженої аватарки з localStorage

  // Очищення вмісту елементів профілю
  nickInfo.textContent = '';
  emailInfo.textContent = '';
  avatarImg.src = 'default-avatar.png'; // Встановлення за замовчуванням

  // Виведення повідомлення про вихід з аккаунта
  showMessage('Ви вийшли з аккаунта.');

  console.log('Вихід з аккаунта.');
}
















function registerAccount(email, username) {
  // Зміна текстового вмісту елементів профілю
  nickInfoElement.textContent = username;
  emailInfoElement.textContent = email;

  // Збереження аккаунта в localStorage
  var account = { email: email, username: username };
  localStorage.setItem('account', JSON.stringify(account));

  // Збереження посилання на аватарку в localStorage
  var selectedAvatar = localStorage.getItem('avatar');
  if (selectedAvatar) {
    localStorage.setItem('avatar', selectedAvatar);
  }

  // Виведення повідомлення про успішну реєстрацію
  showMessage('Дякуємо за реєстрацію!');

  // Ваш код для реєстрації облікового запису
  console.log('Аккаунт зареєстровано успішно!');
  console.log('Електронна пошта: ' + email);
  console.log('Нікнейм: ' + username);
}

function login(email, password) {
  // Ваш код для входу в систему

  // Збереження аккаунта в localStorage
  var account = { email: email, username: email }; // Замініть username на фактичний нікнейм користувача
  localStorage.setItem('account', JSON.stringify(account));

  // Оновлення даних в профілі
  updateProfile(email, email); // Замініть другий параметр на фактичний нікнейм користувача

  // Збереження посилання на аватарку в localStorage
  var selectedAvatar = localStorage.getItem('avatar');
  if (selectedAvatar) {
    localStorage.setItem('avatar', selectedAvatar);
  }

  // Виведення повідомлення про успішний вхід в аккаунт
  showMessage('Успішний вхід в аккаунт!');

  console.log('Успішний вхід в систему!');
  console.log('Електронна пошта: ' + email);
}









