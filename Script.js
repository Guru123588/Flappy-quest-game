const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");

let playerY = 250;
let gravity = 2;
let score = 0;

// Move obstacle
function moveObstacle() {
  let obstacleX = 400;
  setInterval(() => {
    obstacleX -= 5; // Move left
    obstacle.style.right = `${400 - obstacleX}px`;
    if (obstacleX < -50) {
      obstacleX = 400;
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    }
  }, 20);
}

// Player jump
function jump() {
  playerY -= 50;
}

// Apply gravity
function applyGravity() {
  setInterval(() => {
    playerY += gravity;
    player.style.top = `${playerY}px`;

    // Check collision
    const obstacleRect = obstacle.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();
    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom
    ) {
      alert("Game Over! Final Score: " + score);
      window.location.reload();
    }

    // Stop player from falling out of bounds
    if (playerY > 560) {
      alert("Game Over! Final Score: " + score);
      window.location.reload();
    }
  }, 20);
}

// Listen for jump
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

// Start the game
moveObstacle();
applyGravity();
