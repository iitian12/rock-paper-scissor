let score = JSON.parse(localStorage.getItem('score'))
      || {
        wins: 0,
        loses: 0,
        ties: 0
      };


      document.querySelector('.js-scores').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;

      

      function findResult(playerMove) 
      {
        const randomNumber = Math.random();
        let computerMove = '';


        if (randomNumber >= 0 && randomNumber < 1 / 3) 
        {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
        {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1)
        {
          computerMove = 'scissors';
        }

        result = '';

        if (playerMove ===  'rock')
        {
          if (computerMove === 'rock') {
          result = 'Tie';
        } else if (computerMove === 'paper') {
          result = 'You lose';
        } else if (computerMove === 'scissors') {
          result = 'You win';
        }
        }



        if (playerMove === 'paper')
        {
          if (computerMove === 'rock') {
          result = 'You win';
        } else if (computerMove === 'paper') {
          result = 'Tie';
        } else if (computerMove === 'scissors') {
          result = 'You lose';
        }
        }
        


        if (playerMove === 'scissors') 
        {
          if (computerMove === 'rock') {
          result = 'You lose';
        } else if (computerMove === 'paper') {
          result = 'You win';
        } else if (computerMove === 'scissors') {
          result = 'Tie';
        }
        }


        if (result === 'You win') 
        {
          score.wins += 1;
        } else if (result === 'You lose')
        {
          score.loses += 1;
        } else if (result === 'Tie') 
        {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You <img class="show"  src="images/${playerMove}-emoji.png"> <img class="show" src="images/${computerMove}-emoji.png"> Computer`;
        document.querySelector('.js-scores').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
      }