document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const newPasswordInput = document.getElementById("new-password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const toggleNewPassword = document.getElementById("toggle-new-password");
    const toggleConfirmPassword = document.getElementById("toggle-confirm-password");
    const errorMessage = document.getElementById("error-message");

    toggleNewPassword.addEventListener("click", () => {
        const type = newPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        newPasswordInput.setAttribute("type", type);

        if (type === "password") {
            toggleNewPassword.setAttribute("src", "images/show_password_icon.png");
        } else {
            toggleNewPassword.setAttribute("src", "images/hide_password_icon.png");
        }
    });

    toggleConfirmPassword.addEventListener("click", () => {
        const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        confirmPasswordInput.setAttribute("type", type);

        if (type === "password") {
            toggleConfirmPassword.setAttribute("src", "images/show_password_icon.png");
        } else {
            toggleConfirmPassword.setAttribute("src", "images/hide_password_icon.png");
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (newPassword.length < 8 || newPassword.length > 20) {
            errorMessage.textContent = "A senha deve ter entre 8 e 20 caracteres.";
            errorMessage.style.display = "block";
        } else if (newPassword !== confirmPassword) {
            errorMessage.textContent = "As credenciais inseridas estão diferentes!";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            const submitButton = document.querySelector(".submit-button");
        
            submitButton.classList.add("loading");

            setTimeout(() => {
                submitButton.classList.remove("loading");
                alert("Senha redefinida com sucesso!");
                form.reset();
            }, 2000);
        }
    });
});

document.addEventListener('mousemove', function(e) {
    if (e.buttons !== 1) return; //Só cria rastros quando o botão do mouse estiver pressionado (talvez removemos isso, depende do Bikas)

    const trail = document.createElement('div');
    trail.className = 'trail'; //traços
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 2500); //Remove o rastro após 2.5 segundos
});