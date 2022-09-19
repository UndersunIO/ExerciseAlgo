let resultat = parseInt(process.argv[2])
if (resultat % 2 === 0) {
    console.log("pair")
}
else if (!resultat % 2 === 0) {
    console.log("impair")
} else {
    console.log("erreur")
}
