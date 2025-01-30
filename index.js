// html elements
const buttonEl = document.getElementById("dropdown-button");
const colorEl = document.getElementById("color-container");
const schemeEl = document.getElementById("color-scheme-picker");

// event listeners
buttonEl.addEventListener("click", function () {
  console.log(colorEl.value + " " + schemeEl.value);
});
