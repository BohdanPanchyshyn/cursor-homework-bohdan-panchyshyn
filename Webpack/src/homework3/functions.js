function isPalyndrom(word) {
  if (!word || typeof word !== "string") return console.log("Invalid value");
  const reverseWord = word.toString().split("").reverse().join("").replaceAll(" ", "").toLowerCase();
  const handleWord = word.replaceAll(" ", "").toLowerCase();
  return console.log("Is Palindrom(Я несу гусеня) = ", handleWord === reverseWord);
}


export default isPalyndrom;