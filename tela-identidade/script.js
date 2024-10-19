document.addEventListener('DOMContentLoaded', function() {
    // Função que duplica o conteúdo de um elemento várias vezes
    function duplicateText(selector, times) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            let text = element.innerHTML;
            for (let i = 0; i < times; i++) {
                element.innerHTML += text; // Adiciona o conteúdo duplicado
            }
        });
    }

    // Duplica o texto da animação de rolagem horizontal
    duplicateText('.scroll-text', 100);

    // Função para exibir/esconder o menu dropdown no ícone de menu
    const menuIcon = document.querySelector('.menu-icon');
    const menuDropdown = document.querySelector('.menu-dropdown');

    menuIcon.addEventListener('click', function() {
        menuDropdown.style.display = (menuDropdown.style.display === 'block') ? 'none' : 'block'; // Alterna visibilidade
    });
});
