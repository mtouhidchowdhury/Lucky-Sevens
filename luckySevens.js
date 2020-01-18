function play(){
	var startingBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = startingBet;
	var die1;
	var die2;
	var diceSum;
	var maxWinnings = 0;
	var rolls = 0;
	var rollsAtMax = 0;

	if(money<=0){
		alert("INVALID INPUT: PLEASE INPUT A NUMBER GREATER THAN 0");
	}
	else{
		while(money > 0){
			die1 = Math.floor(Math.random() * 6) + 1;
			die2 = Math.floor(Math.random() * 6) + 1;
			diceSum = die1 + die2;
			rolls++;
			if(diceSum != 7){
				money--;
				console.log("lost!");
			}
			else{
				money += 4;
				if(money > maxWinnings){
					maxWinnings += (money-maxWinnings);
					rollsAtMax = rolls;
				}
				console.log("win!");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = startingBet;
	document.getElementById("rollsNum").innerText = rolls;
	document.getElementById("max").innerText = maxWinnings;
	document.getElementById("rollsAtMax").innerText = rollsAtMax;
	return false;
}