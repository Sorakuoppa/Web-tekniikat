let node1 = document.querySelector("#content");
let node2 = document.querySelector(".basic");
let node3 = document.querySelector("li");
let node4 = document.querySelector("ul>:last-child");
console.log(node1.tagName);
console.log(node2.tagName);
console.log(node3.textContent);
console.log(node4.textContent);

let node5 = document.querySelectorAll("body *");
for (elem of node5) {
      console.log(elem.nodeName);
}

let node6 = document.querySelectorAll("article p");
for ( elem of node6) {
    console.log(elem.textContent);
}

let node7 = document.querySelectorAll("li");
for (li of node7) {
    li.textContent = li.textContent + " and John Doe";
}

let node8 = document.querySelectorAll("#content *");
for (elem of node8) {
    if (elem.textContent.length > 10) {
        console.log(elem.nodeName);
    }
}