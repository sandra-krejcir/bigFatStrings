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
    trimmedName.substring(0, 1).toUpperCase() +
    trimmedName.substring(1).toLowerCase();
  const middleNameStart = trimmedName.indexOf(" ") + 1;
  const middleNameEnd = trimmedName.lastIndexOf(" ");
  const middleName = trimmedName.substring(middleNameStart, middleNameEnd);
  const noName = trimmedName.slice(trimmedName.length);
  const password = noName.padStart(trimmedName.length, "*");
  const thirdUpperCased =
    trimmedName.substring(0, 2) +
    trimmedName.substring(2, 3).toUpperCase() +
    trimmedName.substring(3);
  if (operator.value === "upperCase") {
    if (trimmedName.includes(" ")) {
      document.querySelector("#output").value =
        "The input is not a first name.";
    } else {
      document.querySelector("#output").value = upperCased;
    }
  } else if (operator.value === "firstName") {
    document.querySelector("#output").value = firstName;
  } else if (operator.value === "nameLength") {
    document.querySelector(
      "#output"
    ).value = `The first name is ${firstNameLenght} characters long.`;
  } else if (operator.value === "middleName") {
    document.querySelector(
      "#output"
    ).value = `The first name starts on #${middleNameStart} position & ends on #${middleNameEnd}.
    The middle name is ${middleName}`;
  } else if (operator.value === "jpg/png") {
    if (trimmedName.endsWith(".jpg")) {
      document.querySelector("#output").value = "This file is a .jpg file.";
    } else if (trimmedName.endsWith(".png")) {
      document.querySelector("#output").value = "This file is a .png file.";
    } else {
      document.querySelector("#output").value =
        "This file is neither a .jpg file, nor .png file.";
    }
  } else if (operator.value === "password") {
    document.querySelector("#output").value = password;
  } else if (operator.value === "threeUpper") {
    document.querySelector("#output").value = thirdUpperCased;
  } else {
    document.querySelector("#output").value = "1";
  }
}
