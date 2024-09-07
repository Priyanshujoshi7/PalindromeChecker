document.getElementById("check-btn").addEventListener("click", function () {
    const inputText = document.getElementById("text-input").value;
  
    if (!inputText) {
      alert("Please input a value");
      return;
    }
  
    const processedText = inputText
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, ""); // Remove non-alphanumeric characters
  
    const isPalindrome = processedText === processedText.split("").reverse().join("");
  
    const resultElement = document.getElementById("result");
    if (isPalindrome) {
      resultElement.textContent = `${inputText} is a palindrome`;
    } else {
      resultElement.textContent = `${inputText} is not a palindrome`;
    }
  });
  