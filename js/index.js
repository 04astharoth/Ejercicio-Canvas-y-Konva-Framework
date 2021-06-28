const addStar = (layer, stage) => {
  var scale = Math.random();
  var star = new Konva.Star({
    x: Math.random() * stage.getWidth(),
    y: Math.random() * stage.getHeight(),
    numPoints: 5,
    innerRadius: 30,
    outerRadius: 50,
    draggable: true,
    fill: '#f9f120',
    opacity: 0.8, // Opacidad al poligono
    scale: { // inicilmente, escalado  un tamaño aleatorio
      x: scale,
      y: scale
    },
    rotation: Math.random() * 180, // inicialmente, rotado ciertos grados aleatorios
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: {
      x: 5,
      y: 5
    },
    shadowOpacity: 0.6,
    startScale: scale
  });

  layer.add(star); // add the shape to the layer

  // animacion
  var angularSpeed = 90;
  var period = 7000;
  var anim = new Konva.Animation(function (frame) {
    var angleDiff = frame.timeDiff * angularSpeed / 1000;
    var newscale = Math.sin(frame.time * 2 * Math.PI / period) + 0.001;
    star.scale({ x: scale + newscale, y: scale + newscale });
    star.rotate(angleDiff);
  }, layer);
  anim.start();
}

var width = 556;
var height = 316;
var layer = new Konva.Layer();
var stage = new Konva.Stage({
  container: 'dibujo',
  width: width,
  height: height,
});

for (let i = 0; i < 10; i++) {
  addStar(layer,stage);
}

stage.add(layer); // add the layer to the stage