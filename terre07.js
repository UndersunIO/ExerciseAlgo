function methodReverse(letter) {
    if (letter === "") {
        return "";
    } else {
        return methodReverse(letter.substr(1)) + letter.charAt(0);
    }
}

let resultat = methodReverse(process.argv[2]).toLowerCase()
console.log(resultat)