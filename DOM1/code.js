/* let elem = document.getElementById("content"); */
/* let elem = document.querySelector(".special");
let elem2 = document.querySelector("#content"); */
let elem3 = document.querySelectorAll("div:first-child");
/* let elem4 = document.querySelector(".special"); */
/* console.log(elem.tagName); */
/* elem2.textContent = "<b>Hello!</b>"; */
/**@type Element */
let div;
for (const div of elem3) {
    console.log(div.textContent);
}
let listItems = document.querySelectorAll("ul>li");
for (li of listItems){
    li.textContent = "John Doe";
}