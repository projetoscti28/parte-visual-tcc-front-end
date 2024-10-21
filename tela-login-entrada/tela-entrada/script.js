// Adiciona um ouvinte de eventos para o movimento do mouse
document.addEventListener('mousemove', function(e) {
    // Cria rastros apenas se o botão do mouse estiver pressionado
    if (e.buttons !== 1) return; 

    // Cria um elemento div para o rastro
    const trail = document.createElement('div');
    trail.className = 'trail'; // Aplica a classe 'trail' para estilo
    trail.style.left = `${e.pageX}px`; // Define a posição horizontal do rastro
    trail.style.top = `${e.pageY}px`;  // Define a posição vertical do rastro
    document.body.appendChild(trail); // Adiciona o rastro ao corpo da página

    // Remove o rastro após 2.5 segundos
    setTimeout(() => {
        trail.remove();
    }, 2500);
});
