// fonction racine carree
function racineCarree(nombre) {
    let racine = 0;
    let puissance = 0;
    while (puissance <= nombre) {
        racine++;
        puissance = racine * racine;
    }
    return racine - 1;
}
// gestion d'erreurs
// error gestion
if (process.argv[2] === undefined) {
    console.log("erreur");
    process.exit(1);
}
if (process.argv.length > 3 || parseInt(process.argv[2]) === NaN) {
    console.log("erreur");
    process.exit(1);
}
if (process.argv[2] < 0) {
    console.log("erreur");
    process.exit(1);
}

// affichage du resultat
let resultat = parseInt(process.argv[2])
console.log(racineCarree(resultat))
