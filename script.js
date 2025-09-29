const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;


const fontSize = 24;
const columns = Math.floor(width / fontSize); 
const drops = Array(columns).fill(0);        

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});


function randomChar() {
    const chars = '01';
    return chars[Math.floor(Math.random() * chars.length)];
}


function draw() {
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0f0'; 
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(randomChar(), x, y);

        if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}
setInterval(draw, 50);
