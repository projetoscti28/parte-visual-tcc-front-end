document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form"); // Formulário principal
    const newPasswordInput = document.getElementById("new-password"); // Campo de nova senha
    const confirmPasswordInput = document.getElementById("confirm-password"); // Campo de confirmação
    const toggleNewPassword = document.getElementById("toggle-new-password"); // Ícone para alternar visibilidade
    const toggleConfirmPassword = document.getElementById("toggle-confirm-password"); // Ícone para alternar visibilidade da confirmação
    const errorMessage = document.getElementById("error-message"); // Mensagem de erro

    // Alterna a visibilidade do campo nova senha
    toggleNewPassword.addEventListener("click", () => {
        const type = newPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        newPasswordInput.setAttribute("type", type);

        // Alterna a imagem do ícone
        toggleNewPassword.setAttribute("src", type === "password" ? "images/show_password_icon.png" : "images/hide_password_icon.png");
    });

    // Alterna a visibilidade do campo confirmação de senha
    toggleConfirmPassword.addEventListener("click", () => {
        const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        confirmPasswordInput.setAttribute("type", type);

        // Alterna a imagem do ícone
        toggleConfirmPassword.setAttribute("src", type === "password" ? "images/show_password_icon.png" : "images/hide_password_icon.png");
    });

    // Evento de envio do formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validação do comprimento da senha e da correspondência
        if (newPassword.length < 8 || newPassword.length > 20) {
            errorMessage.textContent = "A senha deve ter entre 8 e 20 caracteres.";
            errorMessage.style.display = "block"; // Mostra a mensagem de erro
        } else if (newPassword !== confirmPassword) {
            errorMessage.textContent = "As credenciais inseridas estão diferentes!";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none"; // Esconde a mensagem de erro
            const submitButton = document.querySelector(".submit-button");
            submitButton.classList.add("loading"); // Adiciona o estado de carregamento

            setTimeout(() => {
                submitButton.classList.remove("loading"); // Remove o estado de carregamento
                alert("Senha redefinida com sucesso!"); // Alerta de sucesso
                form.reset(); // Reseta o formulário
            }, 2000);
        }
    });
});

// Adiciona rastros ao mover o mouse
document.addEventListener('mousemove', function(e) {
    if (e.buttons !== 1) return;

    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 2500);
});
