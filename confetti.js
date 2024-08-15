document.addEventListener('DOMContentLoaded', (event) => {
    // Inicializa el confeti
    const confetti = window.confetti || (() => {});

    // Función para lanzar confeti con forma de corazones
    function launchConfetti() {
        confetti({
            particleCount: 200,
            angle: 90,
            spread: 70,
            origin: { x: 0.5, y: 0.5 },
            shapes: ['heart'], // Forma de los confetis
            colors: ['#ff69b4', '#ff1493', '#ffffff'] // Colores de los confetis
        });
    }

    // Lanza confeti al cargar la página
    launchConfetti();
});
