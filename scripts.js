let spinCount = 0;

document.getElementById('spinButton').addEventListener('click', () => {
    spinCount++;

    // Make the wheel spin
    const wheel = document.getElementById('wheel');
    wheel.style.transform = `rotate(${spinCount * 360}deg)`;
    wheel.style.transition = 'transform 0.5s ease';

    if (spinCount >= 3) {
        // Move the overlay up
        document.getElementById('overlay').style.transform = 'translateY(-200%)';

    }
});

const container = document.querySelector('.bolas');

const colors = [
    'rgba(255, 182, 193, 1)',  // Light Pink
    'rgba(135, 206, 250, 1)',  // Light Sky Blue
    'rgba(144, 238, 144, 1)',  // Light Green
    'rgba(255, 160, 122, 1)',  // Light Salmon
    'rgba(221, 160, 221, 1)'   // Plum
];

function createSphere() {
    const sphere = document.createElement('div');
    sphere.classList.add('sphere');

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sphere.style.setProperty('--color', randomColor);

    const randomX = Math.random() * 100;  // Random X position
    const randomY = Math.random() * 100;   // Random Y position from the bottom
    const randomRotation = Math.random() * 360;  // Random rotation

    sphere.style.left = `calc(${randomX}% - 25px)`;  // Centering each sphere
    sphere.style.bottom = `${randomY}px`;
    sphere.style.transform = `rotate(${randomRotation}deg)`;

    container.appendChild(sphere);
}

for (let i = 0; i < 150; i++) {
    createSphere();
}

