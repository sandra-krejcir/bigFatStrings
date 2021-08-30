const name = "george Something Lind";

const firstNameLenght = name.indexOf(" ");
console.log(`the first name is ${firstNameLenght} characters long`);

const firstName = name.substring(0, firstNameLenght);
console.log(`The first name is ${firstName}`);

const upperCased = name.substring(0, 1).toUpperCase() + name.substring(1);
console.log(upperCased);

const middleNameStart = name.indexOf(" ") + 1;
const middleNameEnd = name.lastIndexOf(" ");
const middleName = name.substring(middleNameStart, middleNameEnd);

console.log(
  `The middle name is ${middleName}. It starts on ${middleNameStart} and ends on ${middleNameEnd}`
);
const endsInJpg = name.endsWith(".jpg");
const endsInPng = name.endsWith(".png");

console.log(endsInJpg, endsInPng);

const noName = name.slice(name.length);
const password = noName.padStart(name.length, "*");
console.log(password);
