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
