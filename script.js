const canvas = document.getElementById("terminal");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 400;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function randomChar() {
    const chars = "01";
    return chars[Math.floor(Math.random() * chars.length)];
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0"; // зелёный текст
    ctx.font = "24px monospace";
    const spacing = 20;

    for (let i = 0; i < canvas.width; x += spacing) {
        const y = Math.floor(Math.random() * canvas.height / spacing) * spacing;
        ctx.fillText(randomChar(), x, y);
    }
}

setInterval(draw, 200);
