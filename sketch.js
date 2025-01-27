const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var options = {
    isStatic:true
  }
  //crear el cuerpo base del jugador
  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase);
  //crear el cuerpo del jugador
  player = Bodies.rectangle(215,150,70,200,options);
  World.add(world,player);



}

function draw() {
  background(backgroundImg);

  //mostrar la imagen del jugador utilizando la función image()
 
  //mostrar la imagen de la base del jugador utilizando la función image()


  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  image(playerimage,player.position.x,player.position.y,70,200)

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
