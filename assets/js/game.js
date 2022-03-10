

// this is a function declaration named fight.
function fight(enemy) {

    while(playerInfo.health > 0 && enemy.health > 0) {
        //ask if player wants to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        //if player picks skip confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP"){
            //confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from player money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney ", playerInfo.money);
                break;
            }
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
        };


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
};




//function to start the game.
var startGame = function(){
    // reset player stats
    playerInfo.reset();

    debugger;
    for (var i = 0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0) {
            window.alert("Welcome To Robot Gladiators! " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            debugger;
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
    // if player is still alive, player wins !
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle. ");
    }


    var playAgainConfirm = window.confirm("Would you like to play again? ");

    if(playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};





var shop = function(){
    // ask the player what theyd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    // use switch to carry out action
    switch (shopOptionPrompt) {
        
        case "refill":
        case "REFILL":
            playerInfo.refillHealth;
         break

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
         break;

        case "leave":
        case "LEAVE":
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


var playerInfo = {
    name: window.prompt("What is your robot's name?"), 
    health: 100,
    attack: 10, 
    money: 10,
    reset: function(){
       this.health = 100;
       this.money = 10;
       this.attack = 1;
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