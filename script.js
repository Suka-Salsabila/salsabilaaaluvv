function startLove() {
    let button = document.querySelector(".love-btn");
    button.style.display = "none"; // Hilangkan tombol setelah diklik
    
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
}

function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "heart";
    document.body.appendChild(heart);

    let randomX = Math.random() * window.innerWidth;
    let randomDuration = Math.random() * 2 + 3;

    heart.style.left = `${randomX}px`;
    heart.style.animationDuration = `${randomDuration}s`;

    setTimeout(() => {
        heart.remove();
    }, randomDuration * 1000);
}
