const btn = document.querySelector(".answer.wrong");
const width = window.innerWidth;
const height = window.innerHeight;

console.log(`ClientHeight: ${height} - ClientWidth: ${width}`);

btn.addEventListener("click", () => {
    let randValueX = Math.floor(((Math.random() * width) + 1) / 2);
    let randValueY = Math.floor(((Math.random() * height) + 1)/ 2);
    //console.log(`Random width: ${randValueX}`);
    //console.log(`Random height: ${randValueY}`);
    //btn.style.top = randValueY + 'px';
    //btn.style.right = randValueX + 'px';
    console.log(`ClientHeight: ${height} - ClientWidth: ${width}`);
});