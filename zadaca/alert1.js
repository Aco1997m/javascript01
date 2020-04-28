function guess() {
    var secret = 22;
    var guess = document.getElementById("number").value;

    if (guess == secret) {
		document.getElementById('answer').innerHTML = "You've guessed it - congratulations! It's number "+secret+".";
    }
    else {
        document.getElementById('answer').innerHTML = "Sorry, your guess is not correct... The secret number is not " + guess;
    }
}