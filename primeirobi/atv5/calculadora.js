//resolução do exercício com os valores fixos, sem solcitar entrada do usuário.
const valorConta = 100;
const percentualGorjeta = 15;

const valorGorjeta = valorConta * (percentualGorjeta / 100);
const valorTotal = valorConta + valorGorjeta;

console.log("O valor total da conta é: R$" + valorTotal.toFixed(2));    