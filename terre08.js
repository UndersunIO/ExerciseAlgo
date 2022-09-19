function stringLength(resultat) {
    let length = 0;
    while (resultat[length] !== undefined) {
        length++;
    }
    return length
}

// gestion d'erreurs
if (process.argv[2] === undefined) {
    console.log("erreur");
    process.exit(1);
} else if (process.argv.length > 3 || parseInt(process.argv[2])) {
    console.log("erreur");
    process.exit(1);
} 

let resultat = parseInt(process.argv[2])
console.log(stringLength(process.argv[2]))

