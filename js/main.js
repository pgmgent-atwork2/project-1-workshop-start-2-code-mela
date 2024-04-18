const btn = document.querySelector(".answer.wrong");
const width = window.innerWidth;
const height = window.innerHeight;

console.log(`ClientHeight: ${height} - ClientWidth: ${width}`);

btn.addEventListener("click", () => {
    let randValueX = (Math.floor(((Math.random() * width) + 1) / 2) - 150);
    let randValueY = (Math.floor(((Math.random() * height) + 1)/ 2) - 150);
    btn.style.top = randValueY + 'px';
    btn.style.right = randValueX + 'px';
});