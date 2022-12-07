let images = [
    "https://picsum.photos/id/1/800",
    "https://picsum.photos/id/20/800",
    "https://picsum.photos/id/45/800",
    "https://picsum.photos/id/80/800",
    "https://picsum.photos/id/23/800",
    "https://picsum.photos/id/24/800",
    "https://picsum.photos/id/25/800",
    "https://picsum.photos/id/2/800",
]

let imageContainer = document.getElementById("img_container");
let lightbox = document.getElementById("lightbox");
lightbox.addEventListener("click", closeImage);

/* lisää kuvat html:n, helpot päivittää, koska voi laittaa vain aina uuden kuvan images-lettiin */
for(image of images){
    let img = document.createElement("img");
    img.src = image;
    document.body.appendChild(img);
    img.addEventListener("click", openImage);
}
/**
 * 
 * @param {Event} event 
 */
function openImage(event) {
    let clickedImage = event.currentTarget;
    imageContainer.src = clickedImage.src;
    lightbox.classList.add("visible");
}

function closeImage() {
    lightbox.classList.remove("visible");
}