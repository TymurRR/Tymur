const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Настройки
const fontSize = 24;         // размер символов
const columns = Math.floor(width / fontSize); // количество колонок
const drops = Array(columns).fill(0);        // y-позиция для каждой колонки

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Функция случайного символа
function randomChar() {
    const chars = '01';
    return chars[Math.floor(Math.random() * chars.length)];
}

// Основной цикл
function draw() {
    // Полупрозрачный черный фон для эффекта “следа”
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0f0'; // зелёный цвет
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(randomChar(), x, y);

        // Сброс потока после достижения низа страницы
        if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Рисуем каждые 50 мс (плавно)
setInterval(draw, 50);
