document.addEventListener('DOMContentLoaded', (event) => {
    
    const confetti = window.confetti || (() => {});

    function launchConfetti() {
        confetti({
            particleCount: 200,
            angle: 90,
            spread: 70,
            origin: { x: 0.5, y: 0.5 },
            shapes: ['heart'], // Forma de los confetis
            colors: ['#ff69b4', '#ff1493', '#ffffff'] 
        });
    }

  
    launchConfetti();
});
