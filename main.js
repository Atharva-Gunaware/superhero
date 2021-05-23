var canvas= new fabric.Canvas('myCanvas');

hero_image_width=30;
hero_image_height=30;

player_x=10;
player_y=10;

var player_object="";
var hero_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        hero_image_object=Img;

        hero_object=Img;

        hero_image_object.scaleToWidth(hero_image_width);
        hero_image_object.scaleToHeight(hero_image_height);
        hero_object.set({
            top:player_y,
            left:player_x
    });

    canvas.add(hero_image_object);
    });  
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftkey == true && keyPressed == '80')
    {
     console.log("p and shift pressed together");
     hero_image_width= hero_image_width + 10 ;
     hero_image_height=hero_image_width + 10 ;
     document.getElementById("current_width").innerHTML = hero_image_width;
     document.getElementById("current_height").innerHTML=hero_image_height;   
    }

    if(e.shiftkey && keyPressed == '77')
    {
     console.log("m and shift pressed together");
     hero_image_width= hero_image_width - 10 ;
     hero_image_height=hero_image_width -10 ;
     document.getElementById("current_width").innerHTML = hero_image_width;
     document.getElementById("current_height").innerHTML=hero_image_height;   
    }

    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
    if(keyPressed=='69')
    {
        new_image('captain_america_left_hand.png');
        console.log("e");
    }

    if(keyPressed=='70')
    {
        new_image('hulk_face.png');
        console.log("f");
    }
    if(keyPressed=='71')
    {
        new_image('hulk_left_hand.png');
        console.log("g");
    }
    if(keyPressed=='72')
    {
        new_image('hulk_legs.jpg');
        console.log("h");
    }
    if(keyPressed=='73')
    {
        new_image('hulk_right_hand.png');
        console.log("i");
    }
    if(keyPressed=='74')
    {
        new_image('hulkd_body.png');
        console.log("j");
    }
    if(keyPressed=='75')
    {
        new_image('ironman_body.png');
        console.log("k");
    }
    if(keyPressed=='76')
    {
        new_image('ironman_face.png');
        console.log("l");
    }
    if(keyPressed=='88')
    {
        new_image('ironman_left_hand.png');
        console.log("x");
    }
    if(keyPressed=='78')
    {
        new_image('ironman_legs.png');
        console.log("n");
    }
    if(keyPressed=='79')
    {
        new_image('ironman_right_hand.png');
        console.log("o");
    }
    if(keyPressed=='89')
    {
        new_image('spiderman_body.png');
        console.log("y");
    }
    if(keyPressed=='81')
    {
        new_image('spiderman_face.png');
        console.log("q");
    }
    if(keyPressed=='82')
    {
        new_image('spiderman_left_hand.png');
        console.log("r");
    }
    if(keyPressed=='83')
    {
        new_image('spiderman_legs.png');
        console.log("s");
    }
    if(keyPressed=='84')
    {
        new_image('spiderman_right_hand.png');
        console.log("t");
    }
    if(keyPressed=='85')
    {
        new_image('thor_face.png');
        console.log("u");
    }
    if(keyPressed=='86')
    {
        new_image('thor_left_hand.png');
        console.log("v");
    }
    if(keyPressed=='87')
    {
        new_image('thor_right_hand.png');
        console.log("w");
    }

}

function up()
{
  if (player_y >= 0)
  {
      player_y= player_y - hero_image_height;
      console.log("hero_image_height = " + hero_image_height);
      console.log("when up arrow key is pressed , x= "+ player_x + ", Y="+ player_y );
      canvas.remove(player_object);
      player_update();
  }
}

