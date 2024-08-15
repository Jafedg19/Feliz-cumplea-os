document.addEventListener('DOMContentLoaded', function() {
    const numConfetti = 100;
    const container = document.querySelector('.confetti-container');

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const size = Math.random() * 10 + 5; 
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
        confetti.style.position = 'absolute';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.borderRadius = '50%';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = '0.8';
        container.appendChild(confetti);

       
        setTimeout(() => {
            confetti.style.transition = 'transform 2s, opacity 2s';
            confetti.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = '0';
        }, 100);
        
    
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }

    // Crear el confeti en intervalos
    setInterval(createConfetti, 50);
});
