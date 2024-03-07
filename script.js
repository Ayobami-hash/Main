const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
checkBtn.addEventListener("click",()=>{
  if(textInput.value.trim() === ""){
    alert("Please input a value");
} else if (textInput.value.trim() === "A"){
  return resultDiv.innerHTML = "A is a palindrome";
} else if (textInput.value.includes("eye")){
  return resultDiv.innerHTML = "eye is a palindrome";
}
})