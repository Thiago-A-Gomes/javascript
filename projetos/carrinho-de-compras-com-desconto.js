// Projeto: Carrinho de compras com desconto
// Conceitos usados: variavel (let), array, filter, map, if/else

let precos = [10, 30, 222, 35, 122];

let precosComDescontos = precos.filter(function(preco) {
  return preco >= 100;
});

let precosFinais = precosComDescontos.map(function(preco) {
  return preco - 10;
});

if (precosComDescontos.length === 0) {
  console.log("Nenhum produto com desconto");
} else {
  console.log(precosFinais);
}
