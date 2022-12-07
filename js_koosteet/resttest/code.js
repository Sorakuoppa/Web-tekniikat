getData();
/* ei jäädä odottamaan 
tehhdään jotain muuta, lisätään vaikka elementtejä sivulle,
on paljon eriliaisa REST-palveluita, joista saa ja löytää Json-dataa*/

async function getData(){
    const response = await fetch("https://random-data-api.com/api/v2/appliances?size=10");
    const taulu = await response.json();
    for(laite of taulu){
        let h = document.createElement("h4");
        h.textContent = laite.equipment;
        document.body.appendChild(h);
        console.log(laite.equipment);
    }
}
/* async function getData(){
    const response = await fetch("https://random-data-api.com/api/v2/appliances"); kaksi ekaa riviä tarvitaan, niin js osaa hakea json tiedot sivustolta.
    const laite = await response.json(); 
    console.log(laite.equipment);
}
 */

/* function getData(){
    fetch("https://random-data-api.com/api/v2/appliances?size=10")
        .then ( resp => resp.json() )
        .then ( laitteet => {
            for (laite of laitteet) {
            let h = document.createElement("h4");
            h.textContent = laitteet.equipment;
            document.body.appendChild(h);
            console.log(laite.equipment);
            }
        })
} */
