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
    window.alert("The fight has begun");
};

fight();