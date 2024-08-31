document.addEventListener('DOMContentLoaded', function() {
    
    //Seleciona os elementos
    function duplicateText(selector, times) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            let text = element.innerHTML;
            for (let i = 0; i < times; i++) {
                element.innerHTML += text;
            }
        });
    }

    // Duplica o texto na animação para scroll infinito
    duplicateText('.scroll-text', 100);

    //Dropdown
    document.addEventListener('DOMContentLoaded', function() {
        const menuIcon = document.querySelector('.menu-icon');
        const menuDropdown = document.querySelector('.menu-dropdown');
    
        menuIcon.addEventListener('click', function() {
            menuDropdown.style.display = (menuDropdown.style.display === 'block') ? 'none' : 'block';
        });
    });
});