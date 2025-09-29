const canvas = document.getElementById("terminal");
const ctx = canvas.getContext("2d");

// Подгоняем canvas под весь экран
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // теперь высота равна всей странице
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Функция случайного символа
function randomChar() {
    return Math.random() > 0.5 ? "1" : "0";
}

function draw() {
    // Полупрозрачный фон для эффекта "следа"
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0"; // зелёный текст
    ctx.font = "40px monospace"; // размер цифр
    const spacing = 20; // расстояние между символами

    for (let x = 0; x < canvas.width; x += spacing) {
        const y = Math.floor(Math.random() * canvas.height / spacing) * spacing;
        ctx.fillText(randomChar(), x, y);
    }
}

// Рисуем каждые 200 мс (медленнее)
setInterval(draw, 300);
