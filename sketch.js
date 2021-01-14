var player;
var playerImage;
var maze;
const colors = ['red', 'blue', 'yellow', 'green']
function preload() {
    playerImage = loadImage("assets/player.jpg");
}

function setup() {
    createCanvas(400,400);
    maze = new Group();
    player = createSprite(200,380,10,10);
    player.addImage(playerImage);
    player.scale = 0.1;
    obstacle1 = createSprite(10,0,20,40000)
    obstacle2 = createSprite(390,0,20,4000)
    obstacle3 = createSprite(0,350,400,20)
    obstacle4 = createSprite(250,340,60,20)
    obstacle5 = createSprite(320,290,100,20)
    obstacle6 = createSprite(20,43,200,20)
    obstacle7 = createSprite(120,160,20,140)
    obstacle8 = createSprite(230,30,150,20)
    obstacle9 = createSprite(30,290,123,20) 
    obstacle10 =createSprite(220,133,200,20)   
    obstacle11 =createSprite(293,192,120,20)
    obstacle12 =createSprite(180,290,100,20)
    obstacle18 =createSprite(270,250,40,20)
    obstacle13 = createSprite(43,93,20,53)
    obstacle14 = createSprite(83,103,20,53)
    obstacle15 = createSprite(53,233,70,10)
    obstacle16 = createSprite(343,3,20,173)
    obstacle17 = createSprite(343,3,20,173)
    obstacle19=createSprite(273,103,20,43)
    obstacle20=createSprite(233,83,20,43)
    maze.add(obstacle1)
    maze.add(obstacle2)
    maze.add(obstacle3)
    maze.add(obstacle4)
    maze.add(obstacle5)
    maze.add(obstacle6)
    maze.add(obstacle7)
    maze.add(obstacle8)
    maze.add(obstacle9)
    maze.add(obstacle10)
    maze.add(obstacle11)
    maze.add(obstacle12)
    maze.add(obstacle13)
    maze.add(obstacle14)
    maze.add(obstacle15)
    maze.add(obstacle16)
    maze.add(obstacle17)
    maze.add(obstacle18)
    maze.add(obstacle19)
    maze.add(obstacle20)
}

function draw() {
    background(random(colors));
    
    console.log(mouseX)
    console.log(mouseY)
    player.collide(maze);
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x + 5;
    }

    if(keyDown(LEFT_ARROW)){
        player.x = player.x - 5;
    }

    if(keyDown(UP_ARROW)){
        player.y = player.y - 5;
    }

    if(keyDown(DOWN_ARROW)){
        player.y = player.y + 5;
    }

    drawSprites();
}