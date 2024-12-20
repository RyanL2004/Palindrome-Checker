const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const renderAlert = () => {
  if (inputText.value === "") {
    alert("Please input a value");
    return false;
  } else {
    return true;
  }
};
const cleanInputString = (str) => {
  return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
};

const isPalindrom = (str) => {
  const cleaned = cleanInputString(str);
  const reverse = cleaned.split("").reverse().join("");
  return cleaned === reverse;
};
const displayResult = () => {
  if (isPalindrom(inputText.value)) {
    result.textContent = `${inputText.value} is a palindrome`;
  } else {
    result.textContent = `${inputText.value} is not a palindrome`;
  }
};


