var fondoJuego;

var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');

var estadoPrincipal = {

    preload: function () {
        // carga todos los recursos
        juego.load.image('fondo', 'img/bg.jpeg');
    },

    create: function () {
        // mostrar en pantalla
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
    },

    update: function () {
        // Animamos el juego
        fondoJuego.tilePosition.x -= 1;
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal')