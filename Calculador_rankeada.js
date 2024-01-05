

function saldoVitorias(vitorias, derrotas) {
    saldo = vitorias - derrotas
    return saldo
} 

saldoVitorias(613, 546)



if (saldo <= 10) {
    nivel = "Ferro";
} else if (saldo <= 20) {
    nivel = "Bronze";
} else if (saldo <= 50) {
    nivel = "Prata";
} else if (saldo <= 80) {
    nivel = "Ouro";
} else if (saldo <= 90) {
    nivel = "Diamante";
} else if (saldo <= 100) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)