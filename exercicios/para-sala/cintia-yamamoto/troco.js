module.exports = function (troco) {
  const moedas = [1, 0.5, 0.25, 0.10, 0.05, 0.01]
  let resultado = []
  let trocoRelativo = parseFloat(troco.toFixed(2))
  for (let i = 0; trocoRelativo > 0; moedas.shift()) {
    const moedaAtual = moedas[i];
    while (trocoRelativo >= moedaAtual) {
      resultado.push(moedaAtual)
      trocoRelativo = parseFloat((trocoRelativo - moedaAtual).toFixed(2))
    }
  }
  return resultado
}

console.log('oi');