



console.log("Start making pig game...");

var score, roundScore, activePlayer, activeGame;

initial();

//when click new game came to initial condition...
document.querySelector('.btn-new').addEventListener('click', initial);

//click when roll button for rolling...
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(activeGame === 1){
		var dice1, dice2;
		dice1 = Math.floor(Math.random() * 6) + 1;
		dice2 = Math.floor(Math.random() * 6) + 1;
		//console.log(dice1, dice2);

		document.querySelector('#dice-0').style.display = 'block';
		document.querySelector('#dice-1').style.display = 'block';

		document.getElementById('dice-0').src = 'image/dice-' + dice1 + '.png';
		document.getElementById('dice-1').src = 'image/dice-' + dice2 + '.png';

		if(dice1 == 6 && dice2 == 6){
			score[activePlayer] = 0;
			nextPlayer();
		}
		else if(dice1 === 1 || dice2 === 1){
			nextPlayer();
			
		}else{
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}
	}
});

//when click hold button.....
document.querySelector('.btn-hold').addEventListener('click', function(){
	if (activeGame === 1) {
		score[activePlayer] += roundScore;
		document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

		var inp = document.querySelector('.final-score').value;
		console.log(inp);
		var winScore;

		if(inp){
			winScore = inp
		}else{
			winScore = 50;
		}

		if(score[activePlayer] >= winScore){
			activeGame = 0;
			document.querySelector('#name-' + activePlayer).textContent = "Winner!!";
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		}else{
			nextPlayer();
		}
	}
});

//all function creating below....
function initial(){
	score = [0,0];
	roundScore = 0;
	activePlayer = 0;
	activeGame = 1;

	//all set to zero...
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	document.querySelector('#dice-0').style.display = 'none';
	document.querySelector('#dice-1').style.display = 'none';

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.add('active');

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
}

function nextPlayer(){
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}