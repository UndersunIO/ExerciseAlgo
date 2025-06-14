let Number1 = parseInt(process.argv[2])
let Number2 = parseInt(process.argv[3])

let reste = Number1 % Number2
let resultat = (Number1 - reste) / Number2

if (Number2 === 0 || Number2 > Number1) {
    console.log("erreur")
} else {
    console.log("resultat: " + resultat + "\n" + "reste: " + reste)
}

