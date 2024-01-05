let heroi = "Hércules"
let xp = 5686
let nivel


if (xp < 1001) {
    nivel = "Ferro";
} else if (xp < 2001) {
    nivel = "Bronze";
} else if (xp < 5001) {
    nivel = "Prata";
} else if (xp < 7001) {
    nivel = "Ouro";
} else if (xp < 8001) {
    nivel = "Platina";
} else if (xp < 9001) {
    nivel = "Ascendente";
} else if (xp < 10001) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log('O Herói de nome ' + heroi + ' está no nível de ' + nivel)