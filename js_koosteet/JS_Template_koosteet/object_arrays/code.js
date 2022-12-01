//Luo tähän taulukko käyttäjiä varten.

document.getElementById("submit_button").addEventListener(submitUser);


/**
 * @param {Event} e 
 */
function submitUser(e){
    e.preventDefault(); //estetään sivun päivitys, kun nappia painetaan

    //Tee tähän koodi, joka tallettaa uuden käyttäjän tiedot oliona taulukkoon

    //Tulostetaan aina lopuksi kaikki lisätyt käyttäjänimet
    printUsers();
}

function printUsers(){
    //Tulosta tähän kaikkien käyttäjien nimi taulukosta.
}