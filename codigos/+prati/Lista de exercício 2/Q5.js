// Sua função soma (está correta)
function soma(a, b) {
  console.log(`SOMA executada: ${a} + ${b} = ${a + b}`);
  return a + b;
}

// Sua função debounce (vamos ajustar)
function debounce(funcaoOriginal, tempoDeEspera) {
  let timerId; // 1. Um lugar para guardar o "alarme"

  // 2. Debounce precisa RETORNAR uma NOVA função
  return function(...argumentos) {
    // 3. Quando a nova função é chamada (ex: somaDebounced(2,5) ):
    // Primeiro, cancela qualquer "alarme" anterior
    clearTimeout(timerId);

    // 4. Configura um NOVO "alarme"
    timerId = setTimeout(function() {
      // 5. Quando o alarme tocar (tempoDeEspera passar), executa a funcaoOriginal
      funcaoOriginal(...argumentos); // Passa os argumentos para a funcaoOriginal
    }, tempoDeEspera);
  };
}

console.log("Iniciando teste...");

// 6. COMO USAR:
//    Primeiro, crie a versão "inteligente" (debounced) da sua função 'soma'.
//    Você passa a FUNÇÃO 'soma' (sem os parênteses), e o tempo de espera.
const somaInteligente = debounce(soma, 1000); // 1000ms = 1 segundo

// 7. Agora, use a 'somaInteligente' como se fosse a 'soma'
console.log("Chamando somaInteligente(2, 5)");
somaInteligente(2, 5); // Não vai executar 'soma' agora, só vai agendar.

// Vamos simular outra chamada rápida para testar o debounce:
setTimeout(function() {
  console.log("Chamando somaInteligente(10, 20) após 300ms");
  somaInteligente(10, 20); // Isso deve cancelar a chamada anterior e agendar esta.
}, 300); // 300ms é menos que o tempoDeEspera de 1000ms

// O que você deve ver no console:
// Iniciando teste...
// Chamando somaInteligente(2, 5)
// (após 300ms)
// Chamando somaInteligente(10, 20) após 300ms
// (1000ms DEPOIS da última chamada, ou seja, 1.3s desde o início)
// SOMA executada: 10 + 20 = 30