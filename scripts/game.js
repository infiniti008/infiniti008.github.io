window.onload = function() {
    // var h = document.getElementById('menu_bottom').offsetHeight;
    let gameFieldWidth = document.getElementById('game-field').offsetWidth;;
    let gameFieldHeight = document.getElementById('game-field').offsetHeight;
    var game = new Phaser.Game(gameFieldWidth, gameFieldHeight, Phaser.AUTO, 'game-field', { preload: preload, create: create });

    function preload() {

        game.load.image('logo', '/images/logo.jpg');

    }

    function create() {

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

    }

};