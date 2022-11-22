let form = document.querySelector("form");
let sum10 = document.getElementById("sum");
let sub = document.getElementById("sub");
form.addEventListener("submit", calculateSum);
/**
 * 
 * @param {Event} event 
 */
function calculateSum(event){
    event.preventDefault();
    let formData = new FormData(form);
    let num1 = Number(formData.get("num1"));
    let num2 = Number(formData.get("num2"));
    let sum = num1 + num2;
    let sub = num1 - num2;
    if (sum10.checked) {
        result.textContent = sum;
    }
    else {
        result.textContent = sub;
    }
}
/* let arit = formData.get("arit");
let res;
if(arit === "sum"){
    res = num1 + num2;
} else {
    res = num1 - num2;
}
result.textContent = res;
 */