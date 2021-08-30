"use strict";

document
  .querySelector("#generateOutput")
  .addEventListener("click", generateResult);

function generateResult() {
  console.log("function generateResult()");
  const name = document.querySelector("#firstInput").value;
  const trimmedName = name.trim();
  const firstNameLenght = trimmedName.indexOf(" ");
  const firstName = trimmedName.substring(0, firstNameLenght);
  const upperCased =
    trimmedName.substring(0, 1).toUpperCase() + trimmedName.substring(1);
  if (operator.value === "upperCase") {
    if (trimmedName.includes(" ")) {
      document.querySelector("#output").value =
        "The input is not a first name.";
    } else {
      document.querySelector("#output").value = upperCased;
    }
  } else if (operator.value === "firstName") {
    document.querySelector("#output").value = firstName;
  }
}
