// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLightMode = body.classList.contains("light-mode");
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
  updateThemeIcon(isLightMode ? "light" : "dark");
});

function updateThemeIcon(theme) {
  themeIcon.src = theme === "light" ? "/img/blck.png" : "/img/wht.png";
  themeIcon.alt = theme === "light" ? "Dark mode" : "Light mode";
}

// ... rest of your existing JavaScript code

const passwordBox = document.getElementById("password");
const length = 16;

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const specialCharacters = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

const allCharacters =
  uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

function createPassword() {
  let password = "";
  password += uppercaseLetters.charAt(
    Math.floor(Math.random() * uppercaseLetters.length)
  );
  password += lowercaseLetters.charAt(
    Math.floor(Math.random() * lowercaseLetters.length)
  );
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += specialCharacters.charAt(
    Math.floor(Math.random() * specialCharacters.length)
  );

  while (password.length < length) {
    password += allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }
  passwordBox.value = password;
}

let messagePara = document.getElementById("message-el");

function copyToClipboard() {
  passwordBox.select();
  document.execCommand("copy");
  messagePara.textContent = "Password copied to clipboard!";
}
