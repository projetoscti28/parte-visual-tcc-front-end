document.addEventListener("DOMContentLoaded", () => {
    // Referências aos elementos do formulário
    const form = document.getElementById("cadastro-form");
    const emailInput = document.getElementById("email");
    const emailrecInput = document.getElementById("emailrec");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");
    const passwordconfInput = document.getElementById("passwordconf");
    const togglePasswordconf = document.getElementById("toggle-passwordconf");

    // Alterna a visibilidade da senha quando o ícone é clicado
    togglePassword.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        // Alterar o ícone com base no tipo de entrada
        if (type === "password") {
            togglePassword.setAttribute("src", "images/show_password_icon.png");
        } else {
            togglePassword.setAttribute("src", "images/hide_password_icon.png");
        }
    });

    // Alterna a visibilidade da confirmação de senha
    togglePasswordconf.addEventListener("click", () => {
        const type = passwordconfInput.getAttribute("type") === "password" ? "text" : "password";
        passwordconfInput.setAttribute("type", type);

        // Alterar o ícone com base no tipo de entrada
        if (type === "password") {
            togglePasswordconf.setAttribute("src", "images/show_password_icon.png");
        } else {
            togglePasswordconf.setAttribute("src", "images/hide_password_icon.png");
        }
    });

    // Lógica para o envio do formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault();  // Impede o envio padrão do formulário

        // Verifica se todos os campos necessários estão preenchidos
        if (emailrecInput != null && emailInput != null && passwordInput != null && passwordconfInput != null) {

            // Verifica se as senhas coincidem
            if (passwordInput.value === passwordconfInput.value) {
                const submitButton = document.querySelector(".submit-button");

                // Adiciona o estado de carregamento no botão
                submitButton.classList.add("loading");

                // Simula um atraso para feedback visual
                setTimeout(() => {
                    submitButton.classList.remove("loading");
                    alert("Cadastro realizado com sucesso!");
                    form.reset();  // Reseta o formulário após o cadastro
                }, 2000);
            } else {
                console.log("Erro1");
            }
        } else {
            console.log("Erro2");
        }
    });
});

// Função para criar um rastro visual no movimento do mouse
document.addEventListener('mousemove', function (e) {
    if (e.buttons !== 1) return;  // Só cria o rastro quando o botão do mouse está pressionado

    const trail = document.createElement('div');
    trail.className = 'trail';  // Classe para o rastro visual
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    // Remove o rastro após 2.5 segundos
    setTimeout(() => {
        trail.remove();
    }, 2500);
});
