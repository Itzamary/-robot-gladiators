// playername info variable declarations.
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// log  the following varaiable values to the console using the console.log function.
console.log(playerName, playerHealth, playerAttack);

// enemy info variable declarations.
var enemyName = "Roboto"
var enemyHealth = 50;
var enemyAttack = 12;

// log the enemy values to the console.
console.log(enemyName, enemyHealth, enemyAttack);




// this is a function declaration named fight.
function fight() {
    window.alert("Welome to Robot Gladiators!");

    //ask if player wants to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT"){

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");


        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " Health left ");
        };


        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " heath remianing.");


        // check the player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        };

    } else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from player money for skipping
            playerMoney = playerMoney - 2;
        }
        else {
          fight();
        };

    } else {
        window.alert("You need to choose a valid option. Try again!");
    };
};

fight();