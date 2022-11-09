function qs(selector) {
    return document.querySelector(selector);
}
function ce(name) {
    return document.createElement(name);
}

let elem = qs("#content");
let x = ce("hr");
elem.appendChild(x);
x = ce("h3");
x.textContent = "Timo Hyttinen";
elem.appendChild(x);

let elem2 = qs("ul");
x = ce("li");
x.textContent = "Sunnuntai";
elem2.appendChild(x);

let failure = qs("ul li:first-child")
failure.remove();

let li = document.createElement("li");
let firstLi = document.querySelector("ul li:first-child")
li.textContent = "Maanantai";
firstLi.parentElement.insertBefore(li, firstLi);

let li2 = document.createElement("li");
li2.textContent = "Välipäivä";
x.parentElement.insertBefore(li2, x);

let items = document.querySelectorAll("ul:first-child li");
for (const item of items) {
    let text = item.textContent;
    item.textContent = "";
    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);
}

function changeStyle() {
    let items = document.querySelectorAll("ul:first-child li");
    for (const item of items) {
        item.classList.toggle("colorful");
    }
}
function changeSize() {
    let elems = document.querySelectorAll("li");
    for (const e of elems) {
        if (e.textContent.length < 10) {
            e.classList.add("sizeup");
        }
    }
}