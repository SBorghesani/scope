const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// -----------------------------------------

const conjunction = (firstWord, secondWord) => {
    const conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord;
}

const conjoinedWord = conjunction("Master", "Card");
console.log(conjoinedWord);

// --------------------------------------------


const modSquad = {
    members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    seriesStart: "1968",
    seriesEnd: "1973"
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

const addMemberToRep = () => {
    for (const member of modSquad.members) {
        HTMLRepresentation += `\n<div>${member}</div>`
    }
    return HTMLRepresentation;
}

addMemberToRep();
console.log(HTMLRepresentation);

// -----------------------------------------

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {

    if (location[0] > 2) {
        const invalidLocation = true
        console.log("This location is invalid")
    }
}

// ------------------------------------

const llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = () => {
        const suffix = " the Llama";
        const name = possibleNames[randomizer];
        return name + suffix;
    }

   return namer();
}

const nameMaker = llamaNamer()
console.log(nameMaker)
