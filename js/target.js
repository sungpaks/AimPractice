const gameCanvas = document.getElementById("game-canvas");
const gameCanvasRect = gameCanvas.getBoundingClientRect();
const gameScoreBoard = document.querySelector("#game-scoreboard");
//gameAreaConvas
let targetPositionX;
let targetPositionY;
let score = 0;

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function newPosition() {
	targetPositionX = getRandom(50, gameCanvas.width - 50);
	targetPositionY = getRandom(50, gameCanvas.height - 50);
	return [targetPositionX, targetPositionY];
}
function drawTarget() {
	[targetPositionX, targetPositionY] = newPosition();
	const ctx = gameCanvas.getContext("2d");
	ctx.clearRect(0,0,gameCanvas.width, gameCanvas.height);
	ctx.beginPath();
	ctx.arc(targetPositionX, targetPositionY, 30, 0, 2 * Math.PI);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(targetPositionX, targetPositionY, 10, 0, 2*Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.stroke();
	console.log(targetPositionX, targetPositionY);
}
function isInTarget(x, y) {
	const dist = Math.sqrt((targetPositionX-x)*(targetPositionX-x) + (targetPositionY-y)*(targetPositionY-y))
	console.log(dist);
	if (dist <= 10) return 2;
	if (dist <= 30) return 1;
	else return 0;
}
function onClick(event) {
	console.log(event.offsetX, event.offsetY);
	const curScore = isInTarget(event.offsetX, event.offsetY);
	if (curScore > 0) {
		score += curScore;
		gameScoreBoard.innerText = score;
		drawTarget();
	}
}
gameScoreBoard.innerText = score;
drawTarget();

gameCanvas.addEventListener("click", onClick);