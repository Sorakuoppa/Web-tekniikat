//Luo tähän taulukko käyttäjiä varten.

document.getElementById("submit_button").addEventListener("click", submitUser);
let users = [];
let form = document.querySelector("form");
/**
 * @param {Event} e 
 */
function submitUser(e){
    e.preventDefault(); //estetään sivun päivitys, kun nappia painetaan
    let formData = new FormData(form);
    //Tee tähän koodi, joka tallettaa uuden käyttäjän tiedot oliona taulukkoon
    let un = formData.get("uname");
    let pw = formData.get("pw");
    let user = {
        username: un,
        password: pw
    }
/*  voi myös lyhentää tälleen, koska submuuttuja on sama kuin jäsenmuuttujan nimi:   
    let user2 = {
        un,
        pw
    } */

    users.push(user);

    //Tulostetaan aina lopuksi kaikki lisätyt käyttäjänimet
    printUsers();
}

function printUsers(){
    //Tulosta tähän kaikkien käyttäjien nimi taulukosta.
    console.log("-----");
    for (const user of users) {
        console.log(user.username)
    }
}