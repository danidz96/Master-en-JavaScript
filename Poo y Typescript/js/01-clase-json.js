var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    cambiaColor: function (nuevo_color) {
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiaColor('Azul');