const btn = document.getElementById('rsvpBtn');
const card = document.getElementById('card');

btn.addEventListener('click', () => {
    // 1. Картаны айналдыру анимациясын қосу
    card.classList.add('is-flipped');

    // 2. Алтын түстес мерекелік шашу (Confetti)
    // Айналу ортасына келгенде (600мс) басталады
    setTimeout(() => {
        const duration = 2 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#d4af37', '#ffffff']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#d4af37', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }, 600);
});
