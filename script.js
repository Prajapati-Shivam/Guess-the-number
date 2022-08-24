let randomNum = Math.round((Math.random() * 10));
    console.log(randomNum);
    let attempt = 5;
    let displayText = document.getElementById('text');

    function check() {
      let guess = document.getElementById("number").value;

      if (guess == '') {
        alert("Input cannot be empty");
        displayText.textContent = "";
      }
      
      if(attempt > 0) {
        if (guess < randomNum) {
          displayText.textContent = "Your guess is less than the number";
          attempt-=1;
        }

        if (guess > randomNum) {
          displayText.textContent = "Your guess is greater than the number";
          attempt-=1;
        }      

        if (guess == randomNum) {
          displayText.textContent = "Correct guess!✔";
          attempt-=1;
          console.log(attempt)
          let score = 11 - (5 - attempt);
          displayText.textContent = `You Won and your score is ${score}`;
        }

        if (guess < 0 || guess > 10) {
          displayText.textContent = "Guess the number between 0 to 10";
          attempt-=1;
        }
          
      } else {
        displayText.textContent = "You lose😢";
      }

    }