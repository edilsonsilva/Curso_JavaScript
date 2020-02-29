var nome_produto;
var valor;
var desconto;
nome_produto = prompt("Digite o nome do produto");
valor = prompt("Digite o valor do produto");
desconto = prompt("Digite o valor de desconto do produto");

valor = parseFloat(valor);
desconto=parseFloat(desconto);

var resultado = valor * desconto / 100;
console.log(nome_produto);
console.log(valor - resultado);