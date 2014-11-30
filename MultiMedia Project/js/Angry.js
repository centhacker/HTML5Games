
//DEfault
var Life1 = new Image();
var Life2 = new Image();
var Life3 = new Image();
var pork = new Image();
var PorkHIT = new Image();
var AnimatingBirdiesY = 0;
var CheckLimits = false;
var canvas, ctx;
var Brick = new Image() ;
var Collision = false;
var g = 9.8;
var TO_RADIANS = Math.PI / 180;
var vOx = 0, vOy = 0;
var width = 0;
var gun = new Image();
var bg = new Image();
var Bird1 = new Image();
var Bird2 = new Image();
var Bird3 = new Image();
var height = 0;
var MouseLeave;
var birdHeight = 100, birdWidth = 100;
var PosX=0, PosY=0;
var InAir;
var StartX = 10, StartY = 400;
var pressed;
var position, theta = 0;
var deltaX = 0, deltaY = 0;
var frameCount = 0;
var Counttimes = 1;
var CountBirdies = 1;
var velocity = 0;
var Score = 0;
var done = false;
var FullDone = false;
var HalfDone = false;
var GetAnimation = false;
var TextSize = 10;
var NotDone = false;
var Lives = new Image();

//Pork
var FinalPorkX = 0, FinalPorkY = 0;
//Pork
var Xpork = 830, YPork = 230, AnglePork = 0;
var CheckAnglePork = false;
var porkLanded = false;
var PorkFrame = 0;
var PorkPX = 830, PorkPY = 230;
var PorkVelocity = 0;
var PorkVox = 0, PorkVoY = 0;
//Default x = 260 angle = 0
//MOVING BRICK VARIBLES
var BrickY =  260;
var BrickAngle = 0;
var BrickX = 840;
var Hit = false;
//Full done
// right  y=160 angle = 100
//left    Y=180 ANGLE =-90

//Half Done
//right y= 230 angle = 45
//left  y=240 angle = -45

//Rotating Function
function drawRotatedImage(image, x, y, angle) {

    // save the current co-ordinate system
    // before we screw with it
    ctx.save();

    // move to the middle of where
    // we want to draw our image
    ctx.translate(x, y);

    // rotate around that point, converting our
    // angle from degrees to radians
    ctx.rotate(angle * TO_RADIANS);

    // draw it up and to the left by half the width
    // and height of the image
    ctx.drawImage(image, -(image.width / 2), -(image.height / 2), 80, 200);

    // and restore the co-ords to
    // how they were when we began
    ctx.restore();
}

function drawRotatedPork(image, x, y, angle) {

    // save the current co-ordinate system
    // before we screw with it
    ctx.save();

    // move to the middle of where
    // we want to draw our image
    ctx.translate(x, y);

    // rotate around that point, converting our
    // angle from degrees to radians
    ctx.rotate(angle * TO_RADIANS);

    // draw it up and to the left by half the width
    // and height of the image
    ctx.drawImage(image, -(image.width / 2), -(image.height / 2), 50, 50);

    // and restore the co-ords to
    // how they were when we began
    ctx.restore();
}

//This Fucntion Is copied
function getPosition(e) {

    
    var targ;
    if (!e)
        e = window.event;
    if (e.target)
        targ = e.target;
    else if (e.srcElement)
        targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;

    // jQuery normalizes the pageX and pageY
    // pageX,Y are the mouse positions relative to the document
    // offset() returns the position of the element relative to the document
    var x = e.pageX - $(targ).offset().left;
    var y = e.pageY - $(targ).offset().top;

    return { "x": x, "y": y };
};

//Copied Ended Here
function init () {

    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    Lives.src = "Images\\Lives.png";
    Brick.src = 'Images\\wall.png';
    Bird1.src = 'Images\\bird.png';
    Bird2.src = 'Images\\bird2.png';
    Bird3.src = 'Images\\Bird3.png';
    bg.src = 'Images\\bg.png';
    gun.src = 'Images\\gun.png';
    PorkHIT.src = 'Images\\porkhit.png';
    pork.src = 'Images\\pork.png';
    Life1.src = 'Images\\Life1.png';
    Life2.src = 'Images\\Life2.png';
    Life3.src = 'Images\\Life3.png';
    width = canvas.width;
    height = canvas.height;
   
    
    $('#game').mouseup(function(e) {
        MouseLeave = true;
        InAir = true;
        pressed = false;
    });



    $('#game').mousedown(function (e) {

        MouseLeave = false;
        pressed = true;
        InAir = false;

        position = getPosition(e);
        //now you can use the x and y positions
        PosX = position.x;
        PosY = position.y;
        frameCount = 0;
        velocity = PosX / 7.5;
        PorkVelocity = velocity / 5;
        //theta
        deltaX = width - PosX;
        deltaY = height - PosY;
        theta = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

        console.log(theta);

        //Getting Nots
        PorkVox = PorkVelocity * Math.cos(5 * Math.PI / 180);
        PorkVoY = (PorkVelocity) * Math.sin(5 * Math.PI / 180);

        vOx = velocity * Math.cos(theta * Math.PI / 180);
        vOy = (velocity) * Math.sin(theta * Math.PI / 180);

          // alert('y:' +PosY);



    });
    setInterval(Move, 50);

}

function CheckLives() {
    if (Counttimes == 1) {
        ctx.drawImage(Bird3, 120, 10, 50, 50);
        ctx.drawImage(Bird2, 180, 10, 50, 50);
        ctx.drawImage(Bird1, 240, 10, 50, 50);
    }
    else if (Counttimes == 2) {
        ctx.drawImage(Bird3, 120, 10, 50, 50);
        ctx.drawImage(Bird2, 180, 10, 50, 50);
        ctx.drawImage(Life1, 240, 10, 50, 50);

    }
    else if (Counttimes==3) {
        ctx.drawImage(Bird3, 120, 10, 50, 50);
        ctx.drawImage(Life2, 180, 10, 50, 50);
        ctx.drawImage(Life1, 240, 10, 50, 50);
    }
    else {
        ctx.drawImage(Life3, 120, 10, 50, 50);
        ctx.drawImage(Life2, 180, 10, 50, 50);
        ctx.drawImage(Life1, 240, 10, 50, 50);
    }

}
function clear() { // clear canvas function
    
    ctx.clearRect(0, 0, width,height);
    //  ctx.drawRect(0,0);
    // fill background
   // ctx.fillStyle = bg;
    // ctx.fillRect(0, 0, width, height);

    ctx.drawImage(bg, 0, 0, 1000, 600);
    ctx.drawImage(Lives, 0, 10, 150, 50);
    MovePork();
    CheckLives();
    ctx.drawImage(gun, 80, 360, 100, 100);

}


//Pork
function MovePork() {
    if (Hit==false) {
        PorkImage();
    }
    else {
        if (porkLanded == false) {
            PorkProjectile(PorkVox,PorkVoY);
        }
        if (porkLanded) {
            PorkLand((width - FinalPorkX)+80,(height - FinalPorkY )+450);
        }
        
    }

}

function PorkProjectile(VoxP, VoyP) {
    
    if (PorkPY - 200 >= 400) {
        FinalPorkX = PorkPX;
        FinalPorkY = PorkPY;
        porkLanded = true;
    }
    else {
        PorkPY = 400 - (VoyP * PorkFrame - (1 / 2 * g * Math.pow(PorkFrame, 2)));
        PorkPX = 10 + VoxP * PorkFrame;
        PorkFrame += 0.5;
        ctx.drawImage(pork, PorkPX + 800, PorkPY - 200, 50, 50);
    }
}


function PorkLand(x, y) {
    ctx.drawImage(PorkHIT, x, y, 50, 50);
}

function PorkImage() {

    if (CheckAnglePork==false) {
        if (AnglePork <= 45) {
            AnglePork += 2;
        }
        else {
            // AnglePork -= 2;
            CheckAnglePork = true;
        }
    }

    if (CheckAnglePork) {
        if (AnglePork >= -30) {
            AnglePork -= 2;
        }
        else {
            CheckAnglePork = false;
        }

    }
    
   
    drawRotatedPork(pork,Xpork,YPork,AnglePork);
   // ctx.drawImage(pork, 280, 360, 50, 50);
}


function Move() {

    
    if (done==false) {
        clear();
        
        //Getting Angle
        //Getting Angle


        //Theata

        //    n1 = Math.sqrt(width * width + height * height);
        //    n2 = Math.sqrt(PosX*PosX+PosY*PosY);

        //Line 1 x1,y1(origin) x1,y2(width,height)
        //Line 2 x3,y3(origin) x4,y4(posX,posy)
        //  n1 = (0 - height) / (0 - width);
        // n2 = (0 - PosY) / (0 - PosX);

        // theta =45-   ( Math.atan((n1 - n2) / (1 - (n1 * n2))));


        if (Counttimes > 3) {
            NotDone = true;
        }
        if (MouseLeave && InAir) {



            MovindBirdies();
            if (Counttimes == 1) {

                ctx.drawImage(Bird1, StartX, StartY, 50, 50);
                //  velocity--;



            }
            else if (Counttimes == 2) {
                ctx.drawImage(Bird2, StartX, StartY, 50, 50);
                //  velocity--;

                //Displaying Birdies



            }
            else if (Counttimes == 3) {
                ctx.drawImage(Bird3, StartX, StartY, 50, 50);
                //  velocity--;

            }

        }

        //Aiming
        if (pressed) {

            // DrawAim();
        }
        frameCount += 0.5;


        CheckCollision();
        //Displaying Birdies


        if (CheckLimits) {
            AnimatingBirdiesY++;
            if (AnimatingBirdiesY == 10) {
                CheckLimits = false;
            }
        }
        if (CheckLimits == false) {
            AnimatingBirdiesY--;
            if (AnimatingBirdiesY <= 0) {
                CheckLimits = true;

            }
        }
        //    if (AnimatingBirdiesY >= 0 && AnimatingBirdiesY < 10) {
        //        AnimatingBirdiesY++;
        //    }
        //    if (AnimatingBirdiesY > 10) {
        //        AnimatingBirdiesY--;
        //    }

        if (Counttimes == 1) {
            
                ctx.drawImage(Bird1, 60, 380 + AnimatingBirdiesY, 50, 50);
                ctx.drawImage(Bird2, 40, 380 + AnimatingBirdiesY, 50, 50);
                ctx.drawImage(Bird3, 20, 380 + AnimatingBirdiesY, 50, 50);
            
            
        }
       else if (CountBirdies == 2) {




            //Displaying Birdies
            ctx.drawImage(Bird2, 20, 380 + AnimatingBirdiesY, 50, 50);
            ctx.drawImage(Bird3, 0, 380 + AnimatingBirdiesY, 50, 50);
        }
        else if (CountBirdies == 3) {


            //Displaying Birdies

            ctx.drawImage(Bird3, 0, 380 + AnimatingBirdiesY, 50, 50);

        }

       
        
        //left upper x: 900 y: 400
        //right upper x:1000 y: 400
        //left bottom x: 900 y:600
        //right bottom x:1000 y :600




        //Brick
        //    ctx.drawImage(Brick, width - 100, height - 400, 100, 250);

        DrawBrick();


        ////********************************
        //Full done Right
        ///*********************************
        if (FullDone) {


            BrickX += 4;
            BrickY -= 6;
            BrickAngle += 6;
            if (BrickY < 160 && BrickAngle > 100) {
                FullDone = false;
                done = true;

            }

        }





        //    if (FullDone == false) {
        //        BrickX -= 3;
        //        BrickY -= 4;
        //        BrickAngle -= 4;
        //        if (BrickY < 180 && BrickAngle < -90) {
        //            FullDone = true;
        //        }
        //    }



        //    if (BrickY<240) {
        //        BrickY = 240;
        //    }

        //        if (HalfDone == true) {
        //            BrickX += 1.5;
        //            BrickY -= 2;
        //            BrickAngle += 2;
        //            if (BrickY < 240 && BrickAngle > 25) {
        //                HalfDone = false;
        //                

        //            }
        //        }

        //        if (HalfDone == false) {
        //            BrickX -= 1.5;
        //            BrickY -= 1;
        //            BrickAngle -= 2;
        //            if (BrickY < 240 && BrickAngle < -25) {
        //                HalfDone = true;
        //            }
        //        }


        //left
        //        if (BrickAngle <= -25) {
        //            if (BrickY <= 260 && BrickAngle <= 0) {
        //                CountHalfDone = 0;
        //            }
        //            else {
        //                BrickY += 1;
        //                BrickAngle += 2;
        //            }
        //            
        //           

        //        }

        //        //right
        //        if (BrickAngle >= 24) {
        //            if (BrickY <= 260 && BrickAngle >= 0) {
        //                CountHalfDone = 0;
        //            }
        //            else 
        //            {
        //                BrickY += 2;
        //                BrickAngle -= 2;
        //            }
        //           
        //            
        //        }


        if (HalfDone) {

            BrickX += 5;
            BrickY -= 4;
            BrickAngle += 4;
            if (BrickY < 240 && BrickAngle > 25) {
                HalfDone = false;
                GetAnimation = true;

            }
        }
        if (GetAnimation) {
            BrickX -= 5;
            BrickY += 4;
            BrickAngle -= 4;
            if (BrickY > 260 && BrickAngle < 0) {
                BrickY = 260;
                BrickAngle = 0;
                GetAnimation = false;
            }
        }



        if (InAir) {

            $(window).keydown(function (e) {
                switch (e.keyCode) {
                    case 32:
                        {
                            clear();
                            Bird1 = new Image();
                            Bird1.src = 'bird2.png';
                            theta += 20;
                            console.log('Hit');
                            break;
                        }

                }
            });
        }

    }
    if (done) {

        clear();
        DrawBrick();
        ctx.font = TextSize+"pt Courier";
        ctx.fillText("You Win", 500, 100);
        
        if (TextSize<=50) {
            TextSize++;
        }
    }
    if (NotDone) {
        clear();

        DrawBrick();
        ctx.font = TextSize + "pt Courier";
        ctx.fillText("You Lose", 500, 100);

        if (TextSize <= 50) {
            TextSize++;
        }
    }
    
}



function DrawBrick() {
    ctx.save();
    ctx.rotate(0 * (Math.PI / 180));


  //  pattern = ctx.createPattern(Brick, 'repeat');
   // ctx.fillStyle = pattern;

  //  ctx.rect(width - 120, height - 400, 100, 250);
    // ctx.fill();

    //  ctx.drawImage(Brick, width - 100, height - 400, 80, 250);
    drawRotatedImage(Brick,BrickX,height - BrickY,BrickAngle);
    ctx.restore();
   
}
function DrawAim() {
    clear();
    if (Counttimes == 1) {
        ctx.drawImage(Bird1, PosX, PosY, 50, 50);


    }
    else if (Counttimes == 2) {
        ctx.drawImage(Bird2, PosX, PosY, 50, 50);


    }
    else if (Counttimes == 3) {
        ctx.drawImage(Bird3, PosX, PosY, 50, 50);


    }
}

function CheckCollision() {
    //Collision Detection

    //x:872 y:241
    //x:880 y:436 
    if ((StartX < 910 && StartX > 790) && (StartY < 440+30 && StartY > 240)) {
        // alert('Hit');
        //  ctx.rotate(0.5);
        MouseLeave = false;
        InAir = false;
        clear();
        StartX = 10;
        StartY = 400;
        Counttimes++;
        if (velocity > 100) {
            FullDone = true;
        }
        else {
            HalfDone = true;
        }
        // alert('Hit');
        Hit = true;
        velocity = 0;
        CountBirdies++;
        MotionDone = true;
        
        
    }

   
    //Out of Canvas
    if ((StartX > 1000 || StartY > 600) || (StartX < 0)) {
        MouseLeave = false;

        InAir = false;
        clear();
        StartX = 10;
        StartY = 400;
       
        Counttimes++;
        velocity = 0;
        CountBirdies++; MotionDone = true;

    }

    
   
 }

function MovindBirdies() {
    //Projectile Motion
    StartY = 400 - (vOy * frameCount - (1 / 2 * g * Math.pow(frameCount, 2)));
    StartX = 10 + vOx * frameCount;

}


function CheckLanded() {
   
}

