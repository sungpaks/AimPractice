const gameArea = document.getElementById("game-area");
const gameAreaRect = gameArea.getBoundingClientRect();
const targetPositionX = (Math.floor(Math.random()) * gameAreaRect.width) + gameAreaRect.x;
const targetPositionY = (Math.floor(Math.random()) * gameAreaRect.height) + gameAreaRect.y;
const gameAreaConvas = document.querySelector("#game-area canvas");

function newPosition() {
	const targetPositionX = (Math.floor(Math.random()) * gameAreaRect.width) + gameAreaRect.x;
	const targetPositionY = (Math.floor(Math.random()) * gameAreaRect.height) + gameAreaRect.y;
}
function drawTarget() {
	newPosition();
	const ctx = gameAreaConvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(targetPositionX, targetPositionY, 10, 0, 2 * Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.stroke();
}

drawTarget();
drawTarget();