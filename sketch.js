var database, position;
var gameState = 0;
var playerCount;
var form, player, game;


function setup() {
    database = firebase.database();
    createCanvas(500, 500);
    game = new Game();
    game.getState();
    game.Start();

}

function draw() {
    background("white");

}