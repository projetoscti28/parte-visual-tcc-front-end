document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');

    // Função para encontrar a altura máxima
    function equalizeHeights() {
        let maxHeight = 0;

        // Primeiro, calcula a altura máxima
        teamMembers.forEach(member => {
            let memberHeight = member.offsetHeight;
            if (memberHeight > maxHeight) {
                maxHeight = memberHeight;
            }
        });

        // Depois, aplica essa altura a todas as divs
        teamMembers.forEach(member => {
            member.style.height = `${maxHeight}px`;
        });
    }
    
    // Executar a função ao carregar a página
    equalizeHeights();

    // Observador de interseção para aplicar a animação
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    teamMembers.forEach(member => {
        observer.observe(member);
    });

    // Dropdown
    const menuIcon = document.querySelector('.menu-icon');
    const menuDropdown = document.querySelector('.menu-dropdown');

    menuIcon.addEventListener('click', function() {
        menuDropdown.style.display = (menuDropdown.style.display === 'block') ? 'none' : 'block';
    });

    // Interação com movimento do mouse para a div #info
    const infoSection = document.getElementById('info');

    infoSection.addEventListener('mousemove', function(e) {
        let x = e.pageX - infoSection.offsetLeft;
        let y = e.pageY - infoSection.offsetTop;
        
        let moveX = (x / infoSection.offsetWidth) * 100;
        let moveY = (y / infoSection.offsetHeight) * 100;
        
        infoSection.style.backgroundPosition = `${moveX}% ${moveY}%`;
    });
});