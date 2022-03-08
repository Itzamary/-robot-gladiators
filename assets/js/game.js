// playername info variable declarations.
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

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

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining.");

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    
    // Log a resulting message to the console so we know that it worked.
};

fight();