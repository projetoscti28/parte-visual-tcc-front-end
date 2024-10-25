document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');

    // Função para igualar a altura dos cards dos membros da equipe
    function equalizeHeights() {
        let maxHeight = 0;

        // Calcula a altura máxima entre os cards
        teamMembers.forEach(member => {
            let memberHeight = member.offsetHeight;
            if (memberHeight > maxHeight) {
                maxHeight = memberHeight;
            }
        });

        // Define a altura de todos os cards para a altura máxima
        teamMembers.forEach(member => {
            member.style.height = `${maxHeight}px`;
        });
    }
    
    // Executa a função ao carregar a página
    equalizeHeights();

    // Observador de interseção para animação ao entrar na viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear'); // Adiciona a classe 'appear'
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Define o nível de visibilidade para ativar a animação
    });

    // Observa cada membro da equipe
    teamMembers.forEach(member => {
        observer.observe(member);
    });

    // Alterna a visibilidade do menu dropdown ao clicar no ícone de menu
    const menuIcon = document.querySelector('.menu-icon');
    const menuDropdown = document.querySelector('.menu-dropdown');

    menuIcon.addEventListener('click', function() {
        menuDropdown.style.display = (menuDropdown.style.display === 'block') ? 'none' : 'block';
    });

    // Efeito de fundo animado ao mover o mouse na seção #info
    const infoSection = document.getElementById('info');

    infoSection.addEventListener('mousemove', function(e) {
        let x = e.pageX - infoSection.offsetLeft;
        let y = e.pageY - infoSection.offsetTop;
        
        let moveX = (x / infoSection.offsetWidth) * 100;
        let moveY = (y / infoSection.offsetHeight) * 100;
        
        infoSection.style.backgroundPosition = `${moveX}% ${moveY}%`;
    });
});
