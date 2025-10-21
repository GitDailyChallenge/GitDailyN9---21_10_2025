const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const lengthValue = document.getElementById("lenghtvalue");
lengthValue.textContent = lengthEl.value;
const refreshBtn = document.getElementById("refresh");

lengthEl.addEventListener("input", () => {
  lengthValue.textContent = lengthEl.value;
  generatePassword();
});

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~{}[]|:;?><,./-=";

function generatePassword() {
  let length = +lengthEl.value;
  let chars = "";
  let password = "";

  if (upperEl.checked) chars += upperChars;
  if (lowerEl.checked) chars += lowerChars;
  if (numberEl.checked) chars += numberChars;
  if (symbolEl.checked) chars += symbolChars;

  if (chars === "") return alert("Please select at least one character type!");

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);
refreshBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (passwordInput.value) {
    navigator.clipboard.writeText(passwordInput.value);
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => (copyBtn.textContent = "📋 Copy"), 1500);
  }
});
generatePassword();
