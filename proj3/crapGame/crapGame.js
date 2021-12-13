
// arrays and variable
const sentences = ["You lost the bet. Your total amount is now " , "You won the bet. Your total amount is now "]
var totalMoney = 100

document.getElementById('totalMoney').innerHTML = "Total Bet Money : " + totalMoney


// reset game function
function resetGame(){

    document.forms[0].elements[0].value = ""
    document.forms[0].elements[1].value =""
    document.forms[0].elements[3].value = ""
    document.images[0].src = " ";
    document.images[1].src = " ";
    totalMoney = 100
    document.getElementById('totalMoney').innerHTML = "Total Bet Money  : " + totalMoney
    document.getElementById('diceResults').innerHTML = " "
}

// rollDice function
function rollDice(){
    var die1 = Math.floor(Math.random()*6)+1
    var die2 = Math.floor(Math.random()*6) +1
    var total = die1 + die2;

    document.forms[0].elements[0].value = die1
    document.forms[0].elements[1].value =die2
    document.images[0].src = "dice_" + die1+ ".gif";
    document.images[1].src = "dice_" + die2+ ".gif";
    document.forms[0].elements[3].value = total


    if (total=== 7 || total === 11){
        totalMoney += 20
        document.getElementById('diceResults').innerHTML = sentences[1] + totalMoney
        document.getElementById('totalMoney').innerHTML = "Total Bet Money : " + totalMoney
    }

    else if (total=== 2 || total === 3 || total===12){
        totalMoney -= 20
        document.getElementById('diceResults').innerHTML = sentences[0] + totalMoney
        document.getElementById('totalMoney').innerHTML = "Total Bet Money : " + totalMoney

    }

    
}
