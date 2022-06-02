function getMaxDigit(number) {

  if (isNaN(number) || number <= 0) {
    return console.log("Incorect value!")
  } else {
    number = number.toString();
    let arr = number.split([]);
    return Math.max(...arr);
  }
}
function powNumbers(numbers, pow) {

  let summ = numbers;
  for (let i = 1; i < pow; i++) {
    summ *= numbers;
  }
  return summ;
}
function nameFormatting(name) {

  name = name[0].toUpperCase() + name.substring(1).toLowerCase();
  return name;
}
function resultTax(tax) {

  impost = tax * (0.18 + 0.015);
  tax = tax - impost;
  return tax;
}
function getRandomNumber(n, m) {

  let x = Math.floor(Math.random() * (m - n) + n);
  return x;

}
function countLetter(words, letter) {

  words = words.toLowerCase();
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    if (letter == words.charAt(i)) {
      counter++;
    }
  }
  return counter;
}
function currencyConvert(amount) {
  if (!amount) return;
  const dolarRate = 29.52;
  if (amount.toLowerCase().includes("uah")) {
    return (amount.toLowerCase().split("uah")[0] / dolarRate).toFixed(2) + "$"
  } else if (amount.includes("$")) {
    return (amount.split("$")[0] * dolarRate).toFixed(2) + "UAH"
  } else return ("Incorrect value")
}
function getRandomPassword(passwordLength) {
  let length = passwordLength ? passwordLength : 8;
  let password = "";
  for (let i = 0; i < length; i++) {
    let a = Math.floor(Math.random() * length);
    password += a;
  }
  return password;

}
function deleteLetters(letter, word) {
  if (!letter || !word) return
  return word.replaceAll(letter, "");
}
function isPalyndrom(word) {
  if (!word || typeof word !== "string") return console.log("Invalid value");
  const reverseWord = word.toString().split("").reverse().join("").replaceAll(" ", "").toLowerCase();
  const handleWord = word.replaceAll(" ", "").toLowerCase();
  return handleWord === reverseWord;
}
function removeDuplicateCharacters(string) {
  const stringArray = string.toLowerCase().replaceAll(" ", "").split("");

  const dublicatedLetter = stringArray.filter((el, idx, array) => array.indexOf(el) !== idx)

  const removeDublicatedLetters = stringArray.filter(el => !dublicatedLetter.includes(el)).join("");

  return removeDublicatedLetters
}

document.writeln(
  `Функція №1: ${getMaxDigit(8371)} <br>
   Функція №2: ${powNumbers(2, 7)} <br>
   Функція №3: ${nameFormatting('бОгДаН')} <br>
   Функція №4: ${resultTax(15000)} <br>
   Функція №5: ${getRandomNumber(20, 30)} <br>
   Функція №6: ${countLetter('Банановий', 'а')} <br>
   Функція №7: ${currencyConvert('1000$')} <br>
   Функція №8: ${getRandomPassword()} <br>
   Функція №9: ${deleteLetters('b', "blablabla")} <br>
   Функція №10: ${isPalyndrom("Я несу гусеня")} <br>
   Функція №11: ${removeDuplicateCharacters("Бісквіт був дуже ніжним")} <br>
  `
)