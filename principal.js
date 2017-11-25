var fondoJuego;
var boton;

var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');

var estadoPrincipal = {

    preload: function () {
        // carga todos los recursos
        juego.load.image('fondo', 'img/bg.jpeg');
        juego.load.image('pajaro', 'img/pajaro1.png');
        juego.load.image('btn', 'img/btn.png')
    },

    create: function () {
        // mostrar en pantalla
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
        // juego.add.sprite(0, 0, 'pajaro'); // sprite = image
        boton = juego.add.sprite(juego.width / 2, juego.height / 2, 'btn');
        boton.anchor.setTo(0.5);
    },

    update: function () {
        // Animamos el juego
        fondoJuego.tilePosition.x -= 1;
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal')