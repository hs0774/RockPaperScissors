let compscore=0;
    let playerscore=0;
   function getcomputerChoice(){
      const selection =Math.floor(Math.random()*100)%3;
      
        if(selection <1){
            return "rock";
        }
        else if(selection >=1 && selection <2){
            return "paper";
        }
        else {
            return "scissors";
        }
   }
   function play(playerSelection){
         let ComputerSelection=getcomputerChoice();
          playerSelection = prompt("Enter Rock, Paper or Scissors");
          playerSelection= playerSelection.toLowerCase();

          if(playerSelection =="rock" && ComputerSelection =="paper"){
            return false; 
          }
          else if (playerSelection=="rock" && ComputerSelection=="scissors"){
             return true; 
          }
          else if (playerSelection=="paper" && ComputerSelection=="scissors"){
             return false;
          }
          else if (playerSelection=="paper" && ComputerSelection=="rock"){
            return true; 
          }
          else if (playerSelection=="scissors" && ComputerSelection=="paper"){
            return true;
          }
          else if (playerSelection=="scissors" && ComputerSelection=="rock"){
            return false; 
          }
          else{
            return null;
          }

   }
   function game(){
      for(let i=0;i<5;i++){
        
        let winner=play();
        if(winner === true){
          console.log("You won this round")
          playerscore++;
        }
        else if  (winner === false) {
          console.log("The computer won this round")
          compscore++;
        }
        else {
          console.log("This round is a draw")
        }
        console.log("Your score is "+ playerscore)
        console.log("The computers score is " + compscore)
      }

      if(playerscore > compscore){
        console.log("You won the game") 
      }
      else if (compscore > playerscore){
        console.log("The computer won") 
      }
      else {
        console.log("The game ended with a draw")
      }
      
   }
 
  game();