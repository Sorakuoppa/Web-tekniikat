let button = document.querySelector("button");
let field = document.querySelector("#username");
let p = document.querySelector("p");
let button2 = document.querySelector(".new");

button.addEventListener("click", OkClicked);
button.addEventListener("click", showUsername);
button.addEventListener("wheel", Wheel);
p.addEventListener("click", OkClicked2);
p.addEventListener("wheel", Wheel);

function OkClicked(){
    button.style.width = "100px";
    /* alert("Heips haips"); */
}
function OkClicked2(){
    p.style.width = "500px";
}

function showUsername(){
    let username = field.value;
    let h = document.createElement("h3");
    h.textContent = username;
    document.body.appendChild(h);
}

/**
 * 
 * @param {WheelEvent} event 
 */
function Wheel(event){
    console.log(event.deltaY);
    console.log("Wheeel");
}

button2.addEventListener("click", backgroundChange);
button2.addEventListener("mouseover", changeLanguage);
button2.addEventListener("mouseout", changeBack)
button2.addEventListener("click", makeItBigger);

function backgroundChange(){
    document.body.style.backgroundColor = "red";
}

function changeLanguage(){
    button2.textContent = "Colour";
}

function changeBack(){
    button2.textContent = "Väri";
}

function makeItBigger(){
    let buttonWidth = button2.clientWidth;
    let buttonHeight = button2.clientHeight;
    button2.style.width = buttonWidth + 10 + "px";
    button2.style.height = buttonHeight + 10 + "px";
}