function qs(selector) {
    return document.querySelector(selector);
}
function ce(name) {
    return document.createElement(name);
}

let elem = document.querySelector("#test");

/* elem.remove(); */

/* let x = elem.parentElement; */
/* elem.innerHTML= "<p>Tekstiä</p>"; */

let p = document.createElement("p"); /* luo elementin */
p.textContent = "Tässäpä uusi.";
elem.appendChild(p);

p = document.createElement("p");
p.textContent = "Seuraava.";
elem.appendChild(p);

let elem2 = qs("body");
let nimet = ["Reima", "Liisa", "Timo", "Merja"];
for (const nimi of nimet) {
    let n = ce("p");
    n.textContent = nimi;
    elem.appendChild(n);
}

/* let spes = document.querySelector(".special");
let p = document.createElement("p");
p.textContent = "Jotain tekstiä.";
spes.parentElement.insertBefore(p, spes); */

/**@type {HTMLElement} */
/*let elem3 = document.querySelector("#special");
elem3.style.backgroundColor = "red";
elem3.style.color = "white"; */

let h = document.querySelector("h1");
h.classList.add("colorful"); /*remove poistaa*/

function changeStyle() {
    h.classList.toggle("colorful"); /* vaihtaa sen hetkistä tyyliä yms*/
}