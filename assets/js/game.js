
var fightOrSkip = function(){
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    promptFight = promptFight.toLowerCase();

    // if player picks 'skip' confirm and then stop the loop
    if (promptFight === "skip"){
        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playermoney for skiping
            playerInfo.money = playerInfo.money - 10;

            // return true of player wants to leave
            return true;
        }
    } else if (promptFight === 'fight') {
       return false; 
    } else {

        // recursive function call if the user doesn’t  type the necessary text.
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    
}



// this is a function declaration named fight.
function fight(enemy) {
    var isPlayerTurn = true;

    if (Math.random > 0.5) {
        isPlayerTurn = false;
    }

    while(playerInfo.health > 0 && enemy.health > 0) {

        if (isPlayerTurn){
            
            if (fightOrSkip()){
                // if true, leave fight by breaking loop
                break;
            }
    

            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
            //Subtract the value of `playerAttack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
            enemy.health = Math.max(0, enemy.health - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");


            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");

                //award player money for winning
                playerInfo.money = playerInfo.money + 20;

                //leave while loop since enemy is dead
                break
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " Health left ");
            } 
        
        } 
        else {

        


            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            // Subtract the value of `enemy.attack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerInfo.health = Math.max(0, playerInfo.health - damage);

            // Log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " heath remianing.");


            // check the player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                //leave while loop if player is dead.
                break
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
        isPlayerTurn = !isPlayerTurn;
    }
};




//function to start the game.
var startGame = function(){
    // reset player stats
    playerInfo.reset();

    // for loop to circle through the enemy robots.
    for (var i = 0; i < enemyInfo.length; i++){

        // if player has health alert with welcome message.
        if (playerInfo.health > 0) {
            window.alert("Welcome To Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            
            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store function
                if(storeConfirm){
                   shop(); 
                }
            }

            
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function. 
    endGame();
};





// function to end the entire game.
var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");

    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
      highScore = 0;
    }
    // if player has more money than the high score, player has new high score!
    if (playerInfo.money > highScore) {
      localStorage.setItem("highscore", playerInfo.money);
      localStorage.setItem("name", playerInfo.name);
  
      alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } 
    else {
      alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
  
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
  
    if (playAgainConfirm) {
      startGame();
    } 
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};





var shop = function(){
    // ask the player what theyd like to do
    var shopOptionPrompt = window.prompt('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 to LEAVE.');
    shopOptionPrompt = parseInt(shopOptionPrompt);
    // use switch to carry out action
    
    switch (shopOptionPrompt) {

        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;

    }
}

// function to generate a random numeric value
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}


var getPlayerName = function(){
    var name = "";

    //loop here
    while (name === "" || name === null) {
        name = prompt("what is your robot's name?");
    };

    console.log("Your robot's name is " + name);
    return name;
}


var playerInfo = {
    name: getPlayerName(), 
    health: 100,
    attack: 10, 
    money: 10,

    reset: function(){
       this.health = 100;
       this.money = 10;
       this.attack = 10;
    },

    refillHealth: function(){

        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },

    upgradeAttack: function(){
        if(this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 6;

        }else {
            window.alert("You don't have enough money!");
        }
    }
};


var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },

    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },

    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
];



startGame();