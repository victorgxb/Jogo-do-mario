const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
// const score = document.getElementById("score");
// const animacaoScore = document.querySelector("#score");
const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}
const loop = setInterval(() => {
  const Pipeposi = pipe.offsetLeft;
  const marioposi = +window.getComputedStyle(mario).bottom.replace("px", " ");
  if (Pipeposi <= 120 && Pipeposi > 0 && marioposi < 80) {
    pipe.style.animarion = "none";
    pipe.style.left = `${Pipeposi}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioposi}px`;

    mario.src = "game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    // animacaoScore.style.animation = "score 1s infinite";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
