let elsoSzamjegySzovege = "";
let masodikSzamjegySzovege  = "";
let muvelet = "";
let vanMarMuvelet = false;
let lehetIrni = true;
const szamok = document.getElementsByClassName("szam");
const muvelok = document.getElementsByClassName("fos");
const kiiro = document.getElementById("kiirato");
const egyenloseg = document.getElementById("egyenlo");

// 1. Számok figyelése (egyetlen ciklusban!)
    
    for (let i = 0; i < szamok.length; i++) {
    szamok[i].addEventListener("click", function() {
        const kattintottSzam = szamok[i].textContent;
        kiiro.textContent += kattintottSzam;

        // Ha még nincs művelet, az első számhoz fűzzük, különben a másodikhoz
        if (!vanMarMuvelet) {
            elsoSzamjegySzovege += kattintottSzam;
        } else {
            masodikSzamjegySzovege  += kattintottSzam;
        }
    });
}

// 2. Műveleti jelek figyelése
for (let i = 0; i < muvelok.length; i++) {
    muvelok[i].addEventListener("click", function() {
        if (!vanMarMuvelet && elsoSzamjegySzovege !== "") {
            muvelet = muvelok[i].textContent.trim(); // .trim() leszedi a felesleges szóközöket
            kiiro.textContent += ` ${muvelet} `;
            vanMarMuvelet = true;
        }
    });
}
const torolGomb = document.getElementById("torol"); // vagy querySelector / getElementsByClassName

torolGomb.addEventListener("click",function torol() {
    kiiro.textContent = "";
    elsoSzamjegySzovege = "";
    masodikSzamjegySzovege = "";
    muvelet = "";
    vanMarMuvelet = false;
});
let vanEgyenloseg = false
// 3. Egyenlőségjel és számolás
egyenloseg.addEventListener("click", function() {
    // Itt alakítjuk át számmá (int/float), amikor már megvan mindkét érték!
    const szam1 = parseFloat(elsoSzamjegySzovege);
    const szam2 = parseFloat(masodikSzamjegySzovege );
    
    let eredmeny = 0;

    if (muvelet == "+") {
        eredmeny = szam1 + szam2;
    } else if (muvelet == "-") {
        eredmeny = szam1 - szam2;
    } else if (muvelet == "*") {
        eredmeny = szam1 * szam2;
    } else if (muvelet == "/" && szam2 != 0) {
        eredmeny = szam1 / szam2;
    }
    kiiro.textContent = eredmeny;
});

