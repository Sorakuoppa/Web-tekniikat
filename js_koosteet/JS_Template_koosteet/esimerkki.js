let numerot = [3,6,4,7,8];

for (num of numerot){
    console.log(num);
}

numerot.forEach(tool);
function tool(num){
    console.log(num);
}

numerot.forEach(function(num){
    console.log(num);
})

numerot.forEach( num => console.log(num) );

// hakee taulun numerot arvot ja palauttaa ne uusiTaulu:un lisäten +1 jokaiseen arvoon
let uusiTaulu = numerot.map(function(num){
    return num+1;
});

// sama kuin yllä mutta lambda lauseena
let uusiTaulu2 = numerot.map(num => num+1);

// filtteröi taulusta Numerot kaikki numerot ja palauttaa kaikki isommat kuin 5 tauluun isotNumerot
let isotNumerot = numerot.filter(num => num > 5);

for (const n of isotNumerot) {
    console.log(n);
}