// confetti.js
document.addEventListener('DOMContentLoaded', function() {
    var confetti = window.confetti;

    function shootHeartConfetti() {
        confetti({
            particleCount: 300,
            angle: 90,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#ff0000', '#ff69b4', '#ff1493', '#ff4500', '#ff6347'],
            shapes: ['heart'], // Forma de los confetis
            scalar: 1.2,
            decay: 0.8
        });
    }

    shootHeartConfetti();
});
