const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%&*()-_+=[]{}|;:<>/?";
const numbers = "0123456789";
const characters = upperLetters + lowerLetters + symbols + numbers;
const passwordLength = 10;

function copyContent() {
  const result = document.getElementById("result");
  const text = result.innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Content copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

function generatePassword() {
  let password = "";
  for (let i = passwordLength; i > 0; i--) {
    const characterIndex = Math.floor(Math.random() * characters.length);

    password += characters[characterIndex];

    const result = document.getElementById("result");

    result.innerHTML = password;
  }
}
