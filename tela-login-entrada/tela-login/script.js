// Espera até que o DOM seja completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form"); // Seleciona o formulário de login
    const passwordInput = document.getElementById("password"); // Seleciona o campo de senha
    const togglePassword = document.getElementById("toggle-password"); // Seleciona o ícone de alternância da senha

    // Adiciona um evento de clique no ícone de alternar visibilidade da senha
    togglePassword.addEventListener("click", () => {
        // Alterna entre os tipos de entrada 'password' e 'text'
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        // Alterna a imagem do ícone de visibilidade da senha
        if (type === "password") {
            togglePassword.setAttribute("src", "images/show_password_icon.png");
        } else {
            togglePassword.setAttribute("src", "images/hide_password_icon.png");
        }
    });

    // Evento de envio do formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o envio do formulário

        const submitButton = document.querySelector(".submit-button"); // Seleciona o botão de envio
        submitButton.classList.add("loading"); // Adiciona a classe 'loading' para exibir o estado de carregamento

        // Simula um processo de login
        setTimeout(() => {
            submitButton.classList.remove("loading"); // Remove o estado de carregamento
            alert("Login realizado com sucesso!"); // Exibe uma mensagem de sucesso
            form.reset(); // Limpa o formulário após o login simulado
        }, 2000); // Simula um atraso de 2 segundos
    });
});

// Evento para criar rastros visuais ao mover o mouse
document.addEventListener('mousemove', function(e) {
    if (e.buttons !== 1) return; // Cria rastros apenas quando o botão do mouse estiver pressionado

    const trail = document.createElement('div'); // Cria um novo elemento div para o rastro
    trail.className = 'trail'; // Aplica a classe 'trail' para estilizar o rastro
    trail.style.left = `${e.pageX}px`; // Define a posição horizontal do rastro
    trail.style.top = `${e.pageY}px`;  // Define a posição vertical do rastro
    document.body.appendChild(trail); // Adiciona o rastro ao corpo da página

    // Remove o rastro após 2.5 segundos
    setTimeout(() => {
        trail.remove();
    }, 2500);
});
