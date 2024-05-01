const sliderEl = document.querySelector("#range");
const sliderValue = document.querySelector(".value");

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
});

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
  const passwordLength = document.getElementById("range").value;
  console.log(passwordLength);

  const options = {
    numbers: "0123456789",
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols: "!@#$%&*()-_+=[]{}|;:<>/?",
  };

  let characters = "";
  for (const option in options) {
    if (document.getElementById(option).checked) {
      characters += options[option];
    }
  }

  if (characters === "") {
    const result = document.getElementById("result");
    result.innerHTML = "Sua senha precisa ter alguma coisa &#x1F928;";
    return;
  } else {
    let password = "";
    for (let i = passwordLength; i > 0; i--) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      password += characters[characterIndex];
    }

    const result = document.getElementById("result");
    result.innerHTML = password;
  }
}
