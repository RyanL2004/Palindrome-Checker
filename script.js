const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
// Validate user input
const renderAlert = () => {
  if (inputText.value === "") {
    alert("Please input a value");
    return false;
  } else {
    return true;
  }
};

// Remove non-alphanumeric characters and convert to lowercase
const cleanInputString = (str) => {
  return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
};

// Check if the cleaned string is a palindrome
const isPalindrom = (str) => {
  const cleaned = cleanInputString(str);
  const reverse = cleaned.split("").reverse().join("");
  return cleaned === reverse;
};
// Display the result to the user
const displayResult = () => {
  if (isPalindrom(inputText.value)) {
    result.textContent = `${inputText.value} is a palindrome`;
  } else {
    result.textContent = `${inputText.value} is not a palindrome`;
  }
};
// Main function triggered on button click
const palindromeChecker = () => {
  if (!renderAlert()) {
    return;
  } else {
    displayResult();
  }
};

// Function: Clear All Inputs and Results
const clearResults = () => {
  inputText.value = "";
  result.textContent = "";
  result.className = "";
  history = [];
  palindromeCounter = 0;
  historyContainer.innerHTML = "";
  updatePalindromeCount();
};

// Event Listeners
checkBtn.addEventListener("click", displayResult);
clearBtn.addEventListener("click", clearResults);
inputText.addEventListener("input", () => {
  if (inputText.value.trim() === "") {
    result.textContent = "";
    result.className = "";
  }
});



