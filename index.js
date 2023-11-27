class Heroi {
    constructor(name, age, type, attack) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attack = attack;
    }

    atacar() {
        let attack;
        if (this.type === "Guerreiro") {
            attack = "espada";
        } else if (this.type === "Mago") {
            attack = "magia";
        } else if (this.type === "Monge") {
            attack = "artes marciais";
        } else if (this.type === "Ninja") {
            attack = "shuriken";
        }
        return `O ${this.type} atacou usando ${attack}`;
    }
}

// testes de uso
const herois = [
    new Heroi("Gavião Arqueiro", "30", "Guerreiro"),
    new Heroi("Doutor Estranho", "45", "Mago"),
    new Heroi("Wong", "39", "Monge"),
    new Heroi("Viuva Negra", "29", "Ninja")
];

// Chamadas usando instâncias do array
console.log(herois[0].atacar()); // Guerreiro
console.log(herois[1].atacar()); // Mago
console.log(herois[2].atacar()); // Monge
console.log(herois[3].atacar()); // Ninja