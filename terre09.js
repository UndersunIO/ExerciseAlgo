function calculPuissance(args2, args3) {
  let puissance = 1;
  for (let index = 0; index < args3; index++) {
    puissance = puissance * args2;
  }
  return puissance;
}

if (process.argv.length < 4) {
  console.log("erreur : pas assez d'arguments");
  process.exit(1);
} else if (process.argv.length > 4) {
    console.log("erreur : trop d'arguments");
    process.exit(1);
} else if (parseInt(process.argv[2]) === NaN || parseInt(process.argv[3]) === NaN) {
    console.log("erreur : arguments non numériques");
    process.exit(1);
} else if (process.argv[2] < 0 || process.argv[3] < 0) {
    console.log("erreur : arguments négatifs");
    process.exit(1);
} else if (process.argv[2] === 0 && process.argv[3] === 0) {
    console.log("erreur : arguments nuls");
    process.exit(1);
}



let resultat = calculPuissance(process.argv[2], process.argv[3])
console.log(resultat)