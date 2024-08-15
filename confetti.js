document.addEventListener('DOMContentLoaded', function() {
    function createConfetti() {
        const duration = 5 * 1000; 
        const end = Date.now() + duration;
        const colors = ['#ff0a82', '#ff6f6f', '#ff9a00', '#ffdd00']; 

        (function frame() {
            confetti({
                particleCount: 100,
                angle: 90,
                spread: 70,
                origin: { x: 0.5, y: 0.5 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    createConfetti();
});

