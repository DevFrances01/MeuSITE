document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const clockElement = document.getElementById('clock');

    // Função para atualizar o relógio
    function updateClock() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        clockElement.textContent = now.toLocaleTimeString(undefined, options);
    }

    // Atualizar o relógio a cada segundo
    setInterval(updateClock, 1000);

        updateClock(); // Atualizar o relógio imediatamente ao entrar
    });

