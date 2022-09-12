let argument = process.argv[2] // la lettre exemple A
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let argumentIndex = alphabet.indexOf(argument)

for (let index = 0; index < 26; index++) {
    if (index >= argumentIndex) {
        process.stdout.write(alphabet[index])
    }
}
