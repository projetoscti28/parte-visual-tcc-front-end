// Adiciona um ouvinte de eventos para detectar o movimento do mouse
document.addEventListener('mousemove', function(e) {
    // Só cria rastros quando o botão do mouse estiver pressionado
    if (e.buttons !== 1) return;

    // Cria um novo elemento div para o rastro visual
    const trail = document.createElement('div');
    trail.className = 'trail'; // Aplica a classe de estilo 'trail'
    trail.style.left = `${e.pageX}px`; // Define a posição horizontal do rastro
    trail.style.top = `${e.pageY}px`;  // Define a posição vertical do rastro
    document.body.appendChild(trail); // Adiciona o rastro ao corpo da página

    // Remove o rastro após 2.5 segundos para evitar acúmulo de elementos
    setTimeout(() => {
        trail.remove();
    }, 2500);
});
