let buttonSubmit = document.getElementById("submitButton");
let nameField = document.getElementById("name");
let note = document.getElementById("note");
let check = document.getElementById("important");

buttonSubmit.addEventListener("click", function() {
    let div = document.createElement("div");
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    div.textContent = day + "." + month + "." + year + " (" + nameField.value + ") " + note.value;
    document.getElementById("noteParent").appendChild(div);
    if (check.checked) {
        div.classList.add("important");
    }
    document.getElementById("noteParent").appendChild(div);
}
)
