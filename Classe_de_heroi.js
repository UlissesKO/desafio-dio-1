class main {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    attack(){
        let weapon
        if (this.tipo === "mago"){
            weapon = "magia"
        }
        else if (this.tipo === "guerreiro"){
            weapon = "espada"
        }
        else if (this.tipo === "monge"){
            weapon = "artes marciais"
        }
        else {
            weapon = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${weapon}`)
    }
}


personagem = new main("Ulisses", 17, "mago")
personagem.attack()