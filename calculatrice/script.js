"use strict"

const touches = [...document.querySelectorAll(".button")]
const Keycodes = touches.map(touche =>touche.dataset.key.toLowerCase() )
const ecran = document.querySelector(".ecran")
document.addEventListener("keydown",(e)=>{
    const valeur = e.key.toString().toLowerCase();

    calculer(valeur)
} )
document.addEventListener("click", (e)=>{
    const valeur = e.target.dataset.key.toLowerCase();
    calculer(valeur)
})

const calculer = (valeur) => {
    console.log(Keycodes,valeur);
    if (Keycodes.includes(valeur)) {
        
       switch (valeur) {
        case 'c':
            ecran.textContent = " "
            break;
       
        case '=':
            const calcul = eval(ecran.textContent)
            ecran.textContent = calcul 
            break;
        default:
            const indexkeycode = Keycodes.indexOf(valeur);
            const touche = touches[indexkeycode]
            if (touche) {
                ecran.textContent += touche.innerHTML;
            }
       }
    }
}

window.addEventListener('error', (e)=>{
    alert("Error");
    ecran.textContent = " "
})




