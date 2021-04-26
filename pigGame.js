var scores, roundScore, activePlayer, gamePlaying, secondDice, value;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

// input the max-value for winning
// var value = prompt("Choose your winning value?");

// console.log(dice);

document.querySelector(".img").style.display = "none";
document.querySelector(".imgg").style.display = "none";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

function nextPlayer() {
	if (activePlayer === 0) {
		activePlayer = 1;
	} else {
		activePlayer = 0;
	}
	roundScore = 0;

	//setting it back to zero
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";

	// changing the active class

	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");

	/*activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);*/

	// hiding the dice again

	document.querySelector(".img").style.display = "none";
	document.querySelector(".imgg").style.display = "none";
}

document.querySelector(".btn-roll").addEventListener("click", function () {
	if (gamePlaying) {
		var dice = Math.floor(Math.random() * 6) + 1;
		var dicee = Math.floor(Math.random() * 6) + 1;

		var mainDice = dice + dicee;

		// display the result

		document.querySelector("#current-" + activePlayer).textContent = mainDice;

		var domDoc = document.querySelector(".img");
		domDoc.style.display = "block";

		domDoc.src = "images " + dice + ".jpeg";

		var domDocc = document.querySelector(".imgg");
		domDocc.style.display = "block";

		domDocc.src = "images " + dicee + ".jpeg";

		// update the round score if the rolled number was not a one and back to zero if it is
		// if (dice === 6 && secondDice === 6) {
		if (dice === 6 && mainDice === 6) {
			// score back to zero
			scores[activePlayer] = 0;
			document.getElementById("current-" + activePlayer).textContent = "0";
			// next player
			nextPlayer();
		} else if (dice !== 1 && dicee !== 1) {
			// add score
			roundScore += mainDice;
			// show the round score
			document.getElementById(
				"current-" + activePlayer
			).textContent = roundScore;
		} else {
			// Next player and scores return to zero
			nextPlayer();
		}
		//secondDice = dice;
	}

	var input = document.getElementById("score").value;

	if (input) {
		value = input;
	} else {
		value = 200;
	}
});

// implemeting the hold funtion

document.querySelector(".btn-hold").addEventListener("click", function () {
	if (gamePlaying) {
		scores[activePlayer] += roundScore;
		// updating the scores on click of hold
		document.getElementById("score-" + activePlayer).textContent =
			scores[activePlayer];

		// to check if activeplayer won the game

		if (scores[activePlayer] >= value) {
			document.getElementById("name-" + activePlayer).textContent = "Winner!";
			document
				.querySelector(".player-" + activePlayer + "-panel")
				.classList.add("winner");
			document
				.querySelector(".player-" + activePlayer + "-panel")
				.classList.remove("active");
			gamePlaying = false;
		} else {
			// next player
			nextPlayer();
		}
		document.querySelector(".img").style.display = "none";
		document.querySelector(".imgg").style.display = "none";
	}
});

// restarting the game on click of the new game button

document.querySelector(".btn-new").addEventListener("click", function () {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.getElementById("name-0").textContent = "PLAYER 1";
	document.getElementById("name-1").textContent = "PLAYER 2";

	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");

	// input back to zero
	document.getElementById("score").value = "100 ";
});

// if player rolls 6 twice, all score is lost and it's the next players turn

// im
