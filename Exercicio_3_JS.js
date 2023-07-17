function Persona(name, lastName, age, height, favoriteColor) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.favoriteColor = favoriteColor;
}

let people = [];
let finaliza;
do {
    let name = prompt("Seu nome:");
    if (name === null) {
        break;
    }

    let lastName = prompt("Seu Sobrenome:");
    if (lastName === null) {
        break;
    }

    let age = parseInt(prompt("Seu Idade:"));
    if (isNaN(age)) {
        break;
    }

    let height = parseFloat(prompt("Seu Estatura em Metros:"));
    if (isNaN(height)) {
        break;
    }

    let favoriteColor = prompt("Seu Cor favorito:");
    if (favoriteColor === null) {
        break;
    }

    let persona = new Persona(name, lastName, age, height, favoriteColor);
    people.push(persona);
    finaliza = prompt("¡Registro Completado!...    Continuar (S/N)?");
} while (finaliza.toLocaleLowerCase() !== 'n');

if (people.length > 0) {
    for (let persona of people) {
        console.log(`${persona.name} ${persona.lastName} ${persona.age} ${persona.height} ${persona.favoriteColor}`)
    }
    let pessoaMaisVelhia = people.reduce((prev, curr) => (curr.age > prev.age ? curr : prev));
    let pessoaMaisAlta = people.reduce((prev, curr) => (curr.height > prev.height ? curr : prev));

    console.log(`${pessoaMaisVelhia.name} ${pessoaMaisVelhia.lastName} é a Pessoa de maior Idade, ${pessoaMaisVelhia.age} anos`);
    console.log("Seu cor favorito é: ", pessoaMaisVelhia.favoriteColor);

    console.log(`${pessoaMaisAlta.name} ${pessoaMaisAlta.lastName} é a Pessoa Mais Alta, ${pessoaMaisAlta.height} mts`);
    console.log("Seu cor favorito é: ", pessoaMaisAlta.favoriteColor);
} else {
    console.log("Você não inseriu nenhuma informação");
}
