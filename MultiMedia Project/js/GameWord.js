//Words
var GridLocked = false;     //**
var Cold = false;           //**
var Donut = false;          //**
var Cocci = false;          //**
var Duding = false;         //**
var BedSore = false;        //**
var Tic = false;            //**
var Zebra = false;          //**
var Numerous = false;       //**
var Sky = false;            //**
var Bay = false;            //**
var King = false;           //**
var Rum = false;            //**
var CatBoat = false;        //**
var CaulKing = false;       //**
var Noci = false;           //**   
var Pacyks = false;         //**       
var Pouting = false;        //**
var Quaint = false;         //**
var Vapid = false;          //**    
var Glib = false;
var Assay = false;
var Musik = false;
var Mom = false;
var Gemnut = false;


var Words = new Array();
var AllStrings = new Array();


//
//GridLocked Vertices
var GridLockedStartX = 468, GridLockedStartY = 136, GridLockedEndX = 32, GridLockedEndY = 136;
var GridColor = 0;
//Cold Vertices
var ColdStartX = 180, ColdStartY = 136, ColdEndX = 322, ColdEndY = 136;
var ColdColor = 0;
//Donut Vertices
var DonutStartX = 465, DonutStartY = 361, DonutEndX = 465, DonutEndY = 232;
var DonutColor = 0;
//Cocci Vertices
var CocciStartX = 372, CocciStartY = 265, CocciEndX = 372, CocciEndY = 133;
var CocciColor = 0;
//Duding Vertices
var DudingStartX = 273, DudingStartY = 169, DudingEndX = 32, DudingEndY = 169;
var DudingColor = 0;
//BedSore Vertices
var BedSoreStartX = 468, BedSoreStartY = 424, BedSoreEndX = 180, BedSoreEndY = 424;
var BedSoreColor = 0;
//Tic Vertices
var TicStartX = 129, TicStartY = 326, TicEndX = 129, TicEndY = 393;
var TicColor = 0;
//Zebra Vertices
var ZebraStartX = 418, ZebraStartY = 361, ZebraEndX = 418, ZebraEndY = 234;
var ZebraColor = 0;
//Numerous Vertices
var NumerousStartX = 36, NumerousStartY = 200, NumerousEndX = 36, NumerousEndY = 424;
var NumerousColor = 0;
//Sky Vertices
var SkyStartX = 323, SkyStartY = 423, SkyEndX = 323, SkyEndY = 360;
var SkyColor = 0;
//Bay Vertices
var BayStartX = 418, BayStartY = 296, BayEndX = 322, BayEndY = 360;
var BayColor = 0;
//King Vertices
var KingStartX = 320, KingStartY = 392, KingEndX = 469, KingEndY = 392;
var KingColor = 0;
//Rum Vertices
var RumStartX = 34, RumStartY = 328, RumEndX = 131, RumEndY = 263;
var RumColor = 0;
//CatBoat Vertices
var CatBoatStartX = 180, CatBoatStartY = 233, CatBoatEndX = 467, CatBoatEndY = 233;
var CatBoatColor = 0;
//CaulKing Vertices 
var CaulKingStartX = 131, CaulKingStartY = 393, CaulKingEndX = 467, CaulKingEndY = 393;
var CaulKingColor = 0;
//Noci Vertices 
var NociStartX = 83, NociStartY = 167, NociEndX = 227, NociEndY = 264;
var NociColor = 0;
//Pacyks Vertices 
var PacyksStartX = 322, PacyksStartY = 263, PacyksEndX = 322, PacyksEndY = 425;
var PacyksColor = 0;
//Pouting Vertices 
var PoutingStartX = 82, PoutingStartY = 232, PoutingEndX = 82, PoutingEndY = 425;
var PoutingColor = 0;
//Quaint Vertices 
var QuaintStartX = 324, QuaintStartY = 169, QuaintEndX = 81, QuaintEndY = 329;
var QuaintColor = 0;
//Vapid Vertices
var VapidStartX = 370, VapidStartY = 294, VapidEndX = 370, VapidEndY = 425;
var VapidColor = 0;
//Glib Vertices
var GlibStartX = 177, GlibStartY = 328, GlibEndX = 322, GlibEndY = 233;
var GlibColor = 0;
//Assay Vertices
var AssayStartX = 323, AssayStartY = 295, AssayEndX = 130, AssayEndY = 423;
var AssayColor = 0;
//Musik Vertices
var MusikStartX = 130, MusikStartY = 264, MusikEndX = 323, MusikEndY = 391;
var MusikColor = 0;
//Mom Vertices
var MomStartX = 131, MomStartY = 264, MomEndX = 35, MomEndY = 265;
var MomColor = 0;
//Gemnut Vertices
var GemnutStartX = 466, GemnutStartY = 136, GemnutEndX = 466, GemnutEndY = 297;
var GemnutColor = 0;


var FillStyles = new Array();
FillStyles[0] = "#9a9c79";
FillStyles[1] = "#7fffd4";
FillStyles[2] = "#6495ed";
FillStyles[3] = "#00ffff";
FillStyles[4] = "#adff2f";
FillStyles[5] = "#90ee90";
FillStyles[6] = "#c8b3f5";
FillStyles[7] = "#eeb3f5";
FillStyles[8] = "#d977a3";
FillStyles[9] = "#0ddec2";
FillStyles[10] = "#f2f211";
FillStyles[11] = "#f27a11";
FillStyles[12] = "#8fdb8f";
FillStyles[13] = "#71f20f";
FillStyles[14] = "#e65850";
FillStyles[15] = "#50e3e6";
FillStyles[16] = "#04b0b3";
FillStyles[17] = "#fcca03";
FillStyles[18] = "#8f8c7f";
FillStyles[19] = "#4a9ba1";
FillStyles[20] = "#c9187d";
FillStyles[21] = "#9c6785";
FillStyles[22] = "#436ca1";
FillStyles[23] = "#0fa360";
FillStyles[24] = "#d0d654";


var PosX = 0, PosY = 0;
var FillStyleIndex = 0,Attempts =0;
var CanvasWidth = 500, CanvasHeight = 500;
var StartX = 0, StartY = 0, EndX = 0, EndY = 0;
var drag = false;
var canvas, ctx,WordsCanvas,Wctx;
var Score = 0, CurrentTime = 0, Min = 0, Sec = 0;
var GameTime,GetTime;
var Bg = new Image();  




function init () {

    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    WordsCanvas = document.getElementById('Words');
    Wctx = WordsCanvas.getContext('2d');
    Bg.src = 'Images\\Word.png';
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
    GameTime = setInterval(CountTime, 1000);
    GetTime = setInterval(CalcluateTime,10);


    $("#game").mousedown(function (e) {
        position = getPosition(e);
        //now you can use the x and y positions
        PosX = position.x;
        PosY = position.y;
      //  alert('x:' + PosX + ' y: ' + PosY);
    });
    
   
}

function CalcluateTime() {
    Min = Math.floor(CurrentTime / 60);
    Sec = CurrentTime % 60;
    if (Min < 10) {
        Min = "0" + Min;
    }
    if (Sec < 10) {
        Sec = "0" + Sec;
    }
   
}

function mouseDown(e) {
    StartX = e.pageX - this.offsetLeft;
    StartY = e.pageY - this.offsetTop;
    drag = true;
    ctx.strokeStyle = FillStyles[FillStyleIndex];
    FillStyleIndex++;
    if (FillStyleIndex == 24) {
        FillStyleIndex = 0;
    }
    
}


function mouseUp(e) {
    drag = false;
    EndX = e.pageX - this.offsetLeft;
    EndY = (e.pageY - this.offsetLeft)-100;
    GameLogic();
    Attempts++;
}

function mouseMove(e) {
    if (drag) {
        EndX = e.pageX - this.offsetLeft;
        EndY = e.pageY - this.offsetTop;
        
        draw();
    }
}

function draw() {
    ClearCanvas();    
    DrawSelection(ctx, StartX, StartY, EndX, EndY);
    
  
}



function DrawSelection(context, x1, y1, x2, y2) {
    
    ctx.lineCap = "round";
    ctx.globalAlpha = 0.3;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineWidth = 25;
    context.stroke();
}

function ClearCanvas() {

    
    ctx.clearRect(0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);
    ctx.drawImage(Bg, 0, 0, CanvasWidth, CanvasHeight);

    
    


}





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


function GameLogic() {
  //alert('StartX: ' + StartX + ' StartY: ' + StartY + 'EndX: ' + EndX + ' EndY: ' + EndY);

    //Checking GridLocked
    //GridLockedStartX = 468, GridLockedStartY = 136, GridLockedEndX = 32, GridLockedEndY = 136;
    if (GridLocked==false) {
        if (StartX <= GridLockedStartX + 20 && StartX >= GridLockedStartX - 20 && StartY <= GridLockedStartY + 5 && StartY >= GridLockedStartY - 5
     && EndX <= GridLockedEndX + 20 && EndX >= GridLockedEndX - 20 && EndY <= GridLockedEndY + 5 && EndY >= GridLockedEndY - 5) {
           // alert('Gridlocked' + FillStyleIndex);
            GridColor = FillStyleIndex;
            GridLocked = true;
            GridLockedStartX = StartX;
            GridLockedStartY = StartY;
            GridLockedEndX = EndX;
            GridLockedEndY = EndY;
            Score++;
        }
        else if (EndX <= GridLockedStartX + 10 && EndX >= GridLockedStartX - 10 && EndY <= GridLockedStartY + 5 && EndY >= GridLockedStartY - 5
     && StartX <= GridLockedEndX + 20 && StartX >= GridLockedEndX - 20 && StartY <= GridLockedEndY + 5 && StartY >= GridLockedEndY - 5) {
           // alert('Gridlocked');
            GridColor = FillStyleIndex;
            GridLocked = true;
            GridLockedStartX = StartX;
            GridLockedStartY = StartY;
            GridLockedEndX = EndX;
            GridLockedEndY = EndY;
            Score++;
        }
    }

    if (Cold==false) {
        if (StartX <= ColdStartX + 20 && StartX >= ColdStartX - 20 && StartY <= ColdStartY + 5 && StartY >= ColdStartY - 5
     && EndX <= ColdEndX + 20 && EndX >= ColdEndX - 20 && EndY <= ColdEndY + 5 && EndY >= ColdEndY - 5) {
            //alert('Cold' + FillStyleIndex);
            ColdColor = FillStyleIndex;
            Cold = true;
            ColdStartX = StartX;
            ColdStartY = StartY;
            ColdEndX = EndX;
            ColdEndY = EndY;
            Score++;
        }
        else if (EndX <= ColdStartX + 10 && EndX >= ColdStartX - 10 && EndY <= ColdStartY + 5 && EndY >= ColdStartY - 5
     && StartX <= ColdEndX + 20 && StartX >= ColdEndX - 20 && StartY <= ColdEndY + 5 && StartY >= ColdEndY - 5) {
            //alert('Cold' + FillStyleIndex);
            ColdColor = FillStyleIndex;
            Cold = true;
            ColdStartX = StartX;
            ColdStartY = StartY;
            ColdEndX = EndX;
            ColdEndY = EndY;
            Score++;
        }
    }
    if (Donut==false) {
        if (StartX <= DonutStartX + 20 && StartX >= DonutStartX - 20 && StartY <= DonutStartY + 5 && StartY >= DonutStartY - 5
     && EndX <= DonutEndX + 20 && EndX >= DonutEndX - 20 && EndY <= DonutEndY + 5 && EndY >= DonutEndY - 5) {
            //alert('Donut' + FillStyleIndex);
            DonutColor = FillStyleIndex;
            Donut = true;
            DonutStartX = StartX;
            DonutStartY = StartY;
            DonutEndX = EndX;
            DonutEndY = EndY;
            Score++;
        }
        else if (EndX <= DonutStartX + 10 && EndX >= DonutStartX - 10 && EndY <= DonutStartY + 5 && EndY >= DonutStartY - 5
     && StartX <= DonutEndX + 20 && StartX >= DonutEndX - 20 && StartY <= DonutEndY + 5 && StartY >= DonutEndY - 5) {
            //alert('Donut' + FillStyleIndex);
            DonutColor = FillStyleIndex;
            Donut = true;
            DonutStartX = StartX;
            DonutStartY = StartY;
            DonutEndX = EndX;
            DonutEndY = EndY;
            Score++;
        }
    }
    if (Cocci == false) {
        if (StartX <= CocciStartX + 10 && StartX >= CocciStartX - 10 && StartY <= CocciStartY + 5 && StartY >= CocciStartY - 5
     && EndX <= CocciEndX + 10 && EndX >= CocciEndX - 10 && EndY <= CocciEndY + 5 && EndY >= CocciEndY - 5) {
            //alert('Cocci' + FillStyleIndex);
            CocciColor = FillStyleIndex;
            Cocci = true;
            CocciStartX = StartX;
            CocciStartY = StartY;
            CocciEndX = EndX;
            CocciEndY = EndY;
            Score++;
        }
        else if (EndX <= CocciStartX + 10 && EndX >= CocciStartX - 10 && EndY <= CocciStartY + 5 && EndY >= CocciStartY - 5
     && StartX <= CocciEndX + 20 && StartX >= CocciEndX - 20 && StartY <= CocciEndY + 5 && StartY >= CocciEndY - 5) {
            //alert('Cocci' + FillStyleIndex);
            CocciColor = FillStyleIndex;
            Cocci = true;
            CocciStartX = StartX;
            CocciStartY = StartY;
            CocciEndX = EndX;
            CocciEndY = EndY;
            Score++;
        }
    }
    if (Duding==false) {
        if (StartX <= DudingStartX + 20 && StartX >= DudingStartX - 20 && StartY <= DudingStartY + 5 && StartY >= DudingStartY - 5
     && EndX <= DudingEndX + 20 && EndX >= DudingEndX - 20 && EndY <= DudingEndY + 5 && EndY >= DudingEndY - 5) {
            //alert('Duding' + FillStyleIndex);
            DudingColor = FillStyleIndex;
            Duding = true;
            DudingStartX = StartX;
            DudingStartY = StartY;
            DudingEndX = EndX;
            DudingEndY = EndY;
            Score++;
        }
        else if (EndX <= DudingStartX + 10 && EndX >= DudingStartX - 10 && EndY <= DudingStartY + 5 && EndY >= DudingStartY - 5
     && StartX <= DudingEndX + 20 && StartX >= DudingEndX - 20 && StartY <= DudingEndY + 5 && StartY >= DudingEndY - 5) {
            //alert('Duding' + FillStyleIndex);
            DudingColor = FillStyleIndex;
            Duding = true;
            DudingStartX = StartX;
            DudingStartY = StartY;
            DudingEndX = EndX;
            DudingEndY = EndY;
            Score++;
        }
    }
    if (BedSore==false) {
        if (StartX <= BedSoreStartX + 20 && StartX >= BedSoreStartX - 20 && StartY <= BedSoreStartY + 5 && StartY >= BedSoreStartY - 5
     && EndX <= BedSoreEndX + 20 && EndX >= BedSoreEndX - 20 && EndY <= BedSoreEndY + 5 && EndY >= BedSoreEndY - 5) {
            //alert('BedSore' + FillStyleIndex);
            BedSoreColor = FillStyleIndex;
            BedSore = true;
            BedSoreStartX = StartX;
            BedSoreStartY = StartY;
            BedSoreEndX = EndX;
            BedSoreEndY = EndY;
            Score++;
        }
        else if (EndX <= BedSoreStartX + 10 && EndX >= BedSoreStartX - 10 && EndY <= BedSoreStartY + 5 && EndY >= BedSoreStartY - 5
     && StartX <= BedSoreEndX + 20 && StartX >= BedSoreEndX - 20 && StartY <= BedSoreEndY + 5 && StartY >= BedSoreEndY - 5) {
            //alert('BedSore' + FillStyleIndex);
            BedSoreColor = FillStyleIndex;
            BedSore = true;
            BedSoreStartX = StartX;
            BedSoreStartY = StartY;
            BedSoreEndX = EndX;
            BedSoreEndY = EndY;
            Score++;
        }
    }
    if (Tic==false) {
        if (StartX <= TicStartX + 20 && StartX >= TicStartX - 20 && StartY <= TicStartY + 5 && StartY >= TicStartY - 5
     && EndX <= TicEndX + 20 && EndX >= TicEndX - 20 && EndY <= TicEndY + 5 && EndY >= TicEndY - 5) {
            //alert('Tic' + FillStyleIndex);
            TicColor = FillStyleIndex;
            Tic = true;
            TicStartX = StartX;
            TicStartY = StartY;
            TicEndX = EndX;
            TicEndY = EndY;
            Score++;
        }
        else if (EndX <= TicStartX + 10 && EndX >= TicStartX - 10 && EndY <= TicStartY + 5 && EndY >= TicStartY - 5
     && StartX <= TicEndX + 20 && StartX >= TicEndX - 20 && StartY <= TicEndY + 5 && StartY >= TicEndY - 5) {
            //alert('Tic' + FillStyleIndex);
            TicColor = FillStyleIndex;
            Tic = true;
            TicStartX = StartX;
            TicStartY = StartY;
            TicEndX = EndX;
            TicEndY = EndY;
            Score++;
        }
    }
    if (Zebra==false) {
        if (StartX <= ZebraStartX + 20 && StartX >= ZebraStartX - 20 && StartY <= ZebraStartY + 5 && StartY >= ZebraStartY - 5
     && EndX <= ZebraEndX + 20 && EndX >= ZebraEndX - 20 && EndY <= ZebraEndY + 5 && EndY >= ZebraEndY - 5) {
            //alert('Zebra' + FillStyleIndex);
            ZebraColor = FillStyleIndex;
            Zebra = true;
            ZebraStartX = StartX;
            ZebraStartY = StartY;
            ZebraEndX = EndX;
            ZebraEndY = EndY;
            Score++;
        }
        else if (EndX <= ZebraStartX + 10 && EndX >= ZebraStartX - 10 && EndY <= ZebraStartY + 5 && EndY >= ZebraStartY - 5
     && StartX <= ZebraEndX + 20 && StartX >= ZebraEndX - 20 && StartY <= ZebraEndY + 5 && StartY >= ZebraEndY - 5) {
            //alert('Zebra' + FillStyleIndex);
            ZebraColor = FillStyleIndex;
            Zebra = true;
            ZebraStartX = StartX;
            ZebraStartY = StartY;
            ZebraEndX = EndX;
            ZebraEndY = EndY;
            Score++;
        }
    }
    if (Numerous==false) {
        if (StartX <= NumerousStartX + 20 && StartX >= NumerousStartX - 20 && StartY <= NumerousStartY + 5 && StartY >= NumerousStartY - 5
     && EndX <= NumerousEndX + 20 && EndX >= NumerousEndX - 20 && EndY <= NumerousEndY + 5 && EndY >= NumerousEndY - 5) {
            //alert('Numerous' + FillStyleIndex);
            NumerousColor = FillStyleIndex;
            Numerous = true;
            NumerousStartX = StartX;
            NumerousStartY = StartY;
            NumerousEndX = EndX;
            NumerousEndY = EndY;
            Score++;
        }
        else if (EndX <= NumerousStartX + 10 && EndX >= NumerousStartX - 10 && EndY <= NumerousStartY + 5 && EndY >= NumerousStartY - 5
     && StartX <= NumerousEndX + 20 && StartX >= NumerousEndX - 20 && StartY <= NumerousEndY + 5 && StartY >= NumerousEndY - 5) {
            //alert('Numerous' + FillStyleIndex);
            NumerousColor = FillStyleIndex;
            Numerous = true;
            NumerousStartX = StartX;
            NumerousStartY = StartY;
            NumerousEndX = EndX;
            NumerousEndY = EndY;
            Score++;
        }
    }
    if (Sky==false) {
        if (StartX <= SkyStartX + 20 && StartX >= SkyStartX - 20 && StartY <= SkyStartY + 5 && StartY >= SkyStartY - 5
     && EndX <= SkyEndX + 20 && EndX >= SkyEndX - 20 && EndY <= SkyEndY + 5 && EndY >= SkyEndY - 5) {
            //alert('Sky' + FillStyleIndex);
            SkyColor = FillStyleIndex;
            Sky = true;
            SkyStartX = StartX;
            SkyStartY = StartY;
            SkyEndX = EndX;
            SkyEndY = EndY;
            Score++;
        }
        else if (EndX <= SkyStartX + 10 && EndX >= SkyStartX - 10 && EndY <= SkyStartY + 5 && EndY >= SkyStartY - 5
     && StartX <= SkyEndX + 20 && StartX >= SkyEndX - 20 && StartY <= SkyEndY + 5 && StartY >= SkyEndY - 5) {
            //alert('Sky' + FillStyleIndex);
            SkyColor = FillStyleIndex;
            Sky = true;
            SkyStartX = StartX;
            SkyStartY = StartY;
            SkyEndX = EndX;
            SkyEndY = EndY;
            Score++;
        }
    }
    if (Bay == false) {
        if (StartX <= BayStartX + 20 && StartX >= BayStartX - 20 && StartY <= BayStartY + 5 && StartY >= BayStartY - 5
     && EndX <= BayEndX + 20 && EndX >= BayEndX - 20 && EndY <= BayEndY + 5 && EndY >= BayEndY - 5) {
            //alert('Bay' + FillStyleIndex);
            BayColor = FillStyleIndex;
            Bay = true;
            BayStartX = StartX;
            BayStartY = StartY;
            BayEndX = EndX;
            BayEndY = EndY;
            Score++;
        }
        else if (EndX <= BayStartX + 10 && EndX >= BayStartX - 10 && EndY <= BayStartY + 5 && EndY >= BayStartY - 5
     && StartX <= BayEndX + 20 && StartX >= BayEndX - 20 && StartY <= BayEndY + 5 && StartY >= BayEndY - 5) {
            //alert('Bay' + FillStyleIndex);
            BayColor = FillStyleIndex;
            Bay = true;
            BayStartX = StartX;
            BayStartY = StartY;
            BayEndX = EndX;
            BayEndY = EndY;
            Score++;
        }
    }
    if (King==false) {
        if (StartX <= KingStartX + 20 && StartX >= KingStartX - 20 && StartY <= KingStartY + 5 && StartY >= KingStartY - 5
     && EndX <= KingEndX + 20 && EndX >= KingEndX - 20 && EndY <= KingEndY + 5 && EndY >= KingEndY - 5) {
            //alert('King' + FillStyleIndex);
            KingColor = FillStyleIndex;
            King = true;
            KingStartX = StartX;
            KingStartY = StartY;
            KingEndX = EndX;
            KingEndY = EndY;
            Score++;
        }
        else if (EndX <= KingStartX + 10 && EndX >= KingStartX - 10 && EndY <= KingStartY + 5 && EndY >= KingStartY - 5
     && StartX <= KingEndX + 20 && StartX >= KingEndX - 20 && StartY <= KingEndY + 5 && StartY >= KingEndY - 5) {
            //alert('King' + FillStyleIndex);
            KingColor = FillStyleIndex;
            King = true;
            KingStartX = StartX;
            KingStartY = StartY;
            KingEndX = EndX;
            KingEndY = EndY;
            Score++;
        }
    }
    if (Rum==false) {
        if (StartX <= RumStartX + 20 && StartX >= RumStartX - 20 && StartY <= RumStartY + 5 && StartY >= RumStartY - 5
     && EndX <= RumEndX + 20 && EndX >= RumEndX - 20 && EndY <= RumEndY + 5 && EndY >= RumEndY - 5) {
            //alert('Rum' + FillStyleIndex);
            RumColor = FillStyleIndex;
            Rum = true;
            RumStartX = StartX;
            RumStartY = StartY;
            RumEndX = EndX;
            RumEndY = EndY;
            Score++;
        }
        else if (EndX <= RumStartX + 10 && EndX >= RumStartX - 10 && EndY <= RumStartY + 5 && EndY >= RumStartY - 5
     && StartX <= RumEndX + 20 && StartX >= RumEndX - 20 && StartY <= RumEndY + 5 && StartY >= RumEndY - 5) {
            //alert('Rum' + FillStyleIndex);
            RumColor = FillStyleIndex;
            Rum = true;
            RumStartX = StartX;
            RumStartY = StartY;
            RumEndX = EndX;
            RumEndY = EndY;
            Score++;
        }
    }
    if (CatBoat==false) {
        if (StartX <= CatBoatStartX + 20 && StartX >= CatBoatStartX - 20 && StartY <= CatBoatStartY + 5 && StartY >= CatBoatStartY - 5
     && EndX <= CatBoatEndX + 20 && EndX >= CatBoatEndX - 20 && EndY <= CatBoatEndY + 5 && EndY >= CatBoatEndY - 5) {
            //alert('CatBoat' + FillStyleIndex);
            CatBoatColor = FillStyleIndex;
            CatBoat = true;
            CatBoatStartX = StartX;
            CatBoatStartY = StartY;
            CatBoatEndX = EndX;
            CatBoatEndY = EndY;
            Score++;
        }
        else if (EndX <= CatBoatStartX + 10 && EndX >= CatBoatStartX - 10 && EndY <= CatBoatStartY + 5 && EndY >= CatBoatStartY - 5
     && StartX <= CatBoatEndX + 20 && StartX >= CatBoatEndX - 20 && StartY <= CatBoatEndY + 5 && StartY >= CatBoatEndY - 5) {
            //alert('CatBoat' + FillStyleIndex);
            CatBoatColor = FillStyleIndex;
            CatBoat = true;
            CatBoatStartX = StartX;
            CatBoatStartY = StartY;
            CatBoatEndX = EndX;
            CatBoatEndY = EndY;
            Score++;
        }
    }
    if (CaulKing==false) {
        if (StartX <= CaulKingStartX + 20 && StartX >= CaulKingStartX - 20 && StartY <= CaulKingStartY + 5 && StartY >= CaulKingStartY - 5
     && EndX <= CaulKingEndX + 20 && EndX >= CaulKingEndX - 20 && EndY <= CaulKingEndY + 5 && EndY >= CaulKingEndY - 5) {
            //alert('CaulKing' + FillStyleIndex);
            CaulKingColor = FillStyleIndex;
            CaulKing = true;
            CaulKingStartX = StartX;
            CaulKingStartY = StartY;
            CaulKingEndX = EndX;
            CaulKingEndY = EndY;
            Score++;
        }
        else if (EndX <= CaulKingStartX + 10 && EndX >= CaulKingStartX - 10 && EndY <= CaulKingStartY + 5 && EndY >= CaulKingStartY - 5
     && StartX <= CaulKingEndX + 20 && StartX >= CaulKingEndX - 20 && StartY <= CaulKingEndY + 5 && StartY >= CaulKingEndY - 5) {
            //alert('CaulKing' + FillStyleIndex);
            CaulKingColor = FillStyleIndex;
            CaulKing = true;
            CaulKingStartX = StartX;
            CaulKingStartY = StartY;
            CaulKingEndX = EndX;
            CaulKingEndY = EndY;
            Score++;
        }
    }
    if (Noci==false) {
        if (StartX <= NociStartX + 20 && StartX >= NociStartX - 20 && StartY <= NociStartY + 5 && StartY >= NociStartY - 5
     && EndX <= NociEndX + 20 && EndX >= NociEndX - 20 && EndY <= NociEndY + 5 && EndY >= NociEndY - 5) {
            //alert('Noci' + FillStyleIndex);
            NociColor = FillStyleIndex;
            Noci = true;
            NociStartX = StartX;
            NociStartY = StartY;
            NociEndX = EndX;
            NociEndY = EndY;
            Score++;
        }
        else if (EndX <= NociStartX + 10 && EndX >= NociStartX - 10 && EndY <= NociStartY + 5 && EndY >= NociStartY - 5
     && StartX <= NociEndX + 20 && StartX >= NociEndX - 20 && StartY <= NociEndY + 5 && StartY >= NociEndY - 5) {
            //alert('Noci' + FillStyleIndex);
            NociColor = FillStyleIndex;
            Noci = true;
            NociStartX = StartX;
            NociStartY = StartY;
            NociEndX = EndX;
            NociEndY = EndY;
            Score++;
        }
    }
    if (Pacyks==false) {
        if (StartX <= PacyksStartX + 20 && StartX >= PacyksStartX - 20 && StartY <= PacyksStartY + 5 && StartY >= PacyksStartY - 5
     && EndX <= PacyksEndX + 20 && EndX >= PacyksEndX - 20 && EndY <= PacyksEndY + 5 && EndY >= PacyksEndY - 5) {
            //alert('Pacyks' + FillStyleIndex);
            PacyksColor = FillStyleIndex;
            Pacyks = true;
            PacyksStartX = StartX;
            PacyksStartY = StartY;
            PacyksEndX = EndX;
            PacyksEndY = EndY;
            Score++;
        }
        else if (EndX <= PacyksStartX + 10 && EndX >= PacyksStartX - 10 && EndY <= PacyksStartY + 5 && EndY >= PacyksStartY - 5
     && StartX <= PacyksEndX + 20 && StartX >= PacyksEndX - 20 && StartY <= PacyksEndY + 5 && StartY >= PacyksEndY - 5) {
            //alert('Pacyks' + FillStyleIndex);
            PacyksColor = FillStyleIndex;
            Pacyks = true;
            PacyksStartX = StartX;
            PacyksStartY = StartY;
            PacyksEndX = EndX;
            PacyksEndY = EndY;
            Score++;
        }
    }
    if (Pouting==false) {
        if (StartX <= PoutingStartX + 20 && StartX >= PoutingStartX - 20 && StartY <= PoutingStartY + 5 && StartY >= PoutingStartY - 5
     && EndX <= PoutingEndX + 20 && EndX >= PoutingEndX - 20 && EndY <= PoutingEndY + 5 && EndY >= PoutingEndY - 5) {
            //alert('Pouting' + FillStyleIndex);
            PoutingColor = FillStyleIndex;
            Pouting = true;
            PoutingStartX = StartX;
            PoutingStartY = StartY;
            PoutingEndX = EndX;
            PoutingEndY = EndY;
            Score++;
        }
        else if (EndX <= PoutingStartX + 10 && EndX >= PoutingStartX - 10 && EndY <= PoutingStartY + 5 && EndY >= PoutingStartY - 5
     && StartX <= PoutingEndX + 20 && StartX >= PoutingEndX - 20 && StartY <= PoutingEndY + 5 && StartY >= PoutingEndY - 5) {
            //alert('Pouting' + FillStyleIndex);
            PoutingColor = FillStyleIndex;
            Pouting = true;
            PoutingStartX = StartX;
            PoutingStartY = StartY;
            PoutingEndX = EndX;
            PoutingEndY = EndY;
            Score++;
        }
    }
    if (Quaint==false) {
        if (StartX <= QuaintStartX + 20 && StartX >= QuaintStartX - 20 && StartY <= QuaintStartY + 5 && StartY >= QuaintStartY - 5
     && EndX <= QuaintEndX + 20 && EndX >= QuaintEndX - 20 && EndY <= QuaintEndY + 5 && EndY >= QuaintEndY - 5) {
            //alert('Quaint' + FillStyleIndex);
            QuaintColor = FillStyleIndex;
            Quaint = true;
            QuaintStartX = StartX;
            QuaintStartY = StartY;
            QuaintEndX = EndX;
            QuaintEndY = EndY;
            Score++;
        }
        else if (EndX <= QuaintStartX + 10 && EndX >= QuaintStartX - 10 && EndY <= QuaintStartY + 5 && EndY >= QuaintStartY - 5
     && StartX <= QuaintEndX + 20 && StartX >= QuaintEndX - 20 && StartY <= QuaintEndY + 5 && StartY >= QuaintEndY - 5) {
            //alert('Quaint' + FillStyleIndex);
            QuaintColor = FillStyleIndex;
            Quaint = true;
            QuaintStartX = StartX;
            QuaintStartY = StartY;
            QuaintEndX = EndX;
            QuaintEndY = EndY;
            Score++;
        }
    }
    if (Vapid == false) {
        if (StartX <= VapidStartX + 20 && StartX >= VapidStartX - 20 && StartY <= VapidStartY + 5 && StartY >= VapidStartY - 5
     && EndX <= VapidEndX + 20 && EndX >= VapidEndX - 20 && EndY <= VapidEndY + 5 && EndY >= VapidEndY - 5) {
            //alert('Vapid' + FillStyleIndex);
            VapidColor = FillStyleIndex;
            Vapid = true;
            VapidStartX = StartX;
            VapidStartY = StartY;
            VapidEndX = EndX;
            VapidEndY = EndY;
            Score++;
        }
        else if (EndX <= VapidStartX + 10 && EndX >= VapidStartX - 10 && EndY <= VapidStartY + 5 && EndY >= VapidStartY - 5
     && StartX <= VapidEndX + 20 && StartX >= VapidEndX - 20 && StartY <= VapidEndY + 5 && StartY >= VapidEndY - 5) {
            //alert('Vapid' + FillStyleIndex);
            VapidColor = FillStyleIndex;
            Vapid = true;
            VapidStartX = StartX;
            VapidStartY = StartY;
            VapidEndX = EndX;
            VapidEndY = EndY;
            Score++;
        }
    }
    if (Glib == false) {
        if (StartX <= GlibStartX + 20 && StartX >= GlibStartX - 20 && StartY <= GlibStartY + 5 && StartY >= GlibStartY - 5
     && EndX <= GlibEndX + 20 && EndX >= GlibEndX - 20 && EndY <= GlibEndY + 5 && EndY >= GlibEndY - 5) {
            //alert('Glib' + FillStyleIndex);
            GlibColor = FillStyleIndex;
            Glib = true;
            GlibStartX = StartX;
            GlibStartY = StartY;
            GlibEndX = EndX;
            GlibEndY = EndY;
            Score++;
        }
        else if (EndX <= GlibStartX + 10 && EndX >= GlibStartX - 10 && EndY <= GlibStartY + 5 && EndY >= GlibStartY - 5
     && StartX <= GlibEndX + 20 && StartX >= GlibEndX - 20 && StartY <= GlibEndY + 5 && StartY >= GlibEndY - 5) {
            //alert('Glib' + FillStyleIndex);
            GlibColor = FillStyleIndex;
            Glib = true;
            GlibStartX = StartX;
            GlibStartY = StartY;
            GlibEndX = EndX;
            GlibEndY = EndY;
            Score++;
        }
    }
    if (Assay == false) {
        if (StartX <= AssayStartX + 20 && StartX >= AssayStartX - 20 && StartY <= AssayStartY + 5 && StartY >= AssayStartY - 5
     && EndX <= AssayEndX + 20 && EndX >= AssayEndX - 20 && EndY <= AssayEndY + 5 && EndY >= AssayEndY - 5) {
            //alert('Assay' + FillStyleIndex);
            AssayColor = FillStyleIndex;
            Assay = true;
            AssayStartX = StartX;
            AssayStartY = StartY;
            AssayEndX = EndX;
            AssayEndY = EndY;
            Score++;
        }
        else if (EndX <= AssayStartX + 10 && EndX >= AssayStartX - 10 && EndY <= AssayStartY + 5 && EndY >= AssayStartY - 5
     && StartX <= AssayEndX + 20 && StartX >= AssayEndX - 20 && StartY <= AssayEndY + 5 && StartY >= AssayEndY - 5) {
            //alert('Assay' + FillStyleIndex);
            AssayColor = FillStyleIndex;
            Assay = true;
            AssayStartX = StartX;
            AssayStartY = StartY;
            AssayEndX = EndX;
            AssayEndY = EndY;
            Score++;
        }
    }
    if (Musik==false) {
        if (StartX <= MusikStartX + 20 && StartX >= MusikStartX - 20 && StartY <= MusikStartY + 5 && StartY >= MusikStartY - 5
     && EndX <= MusikEndX + 20 && EndX >= MusikEndX - 20 && EndY <= MusikEndY + 5 && EndY >= MusikEndY - 5) {
            //alert('Musik' + FillStyleIndex);
            MusikColor = FillStyleIndex;
            Musik = true;
            MusikStartX = StartX;
            MusikStartY = StartY;
            MusikEndX = EndX;
            MusikEndY = EndY;
            Score++;
        }
        else if (EndX <= MusikStartX + 10 && EndX >= MusikStartX - 10 && EndY <= MusikStartY + 5 && EndY >= MusikStartY - 5
     && StartX <= MusikEndX + 20 && StartX >= MusikEndX - 20 && StartY <= MusikEndY + 5 && StartY >= MusikEndY - 5) {
            //alert('Musik' + FillStyleIndex);
            MusikColor = FillStyleIndex;
            Musik = true;
            MusikStartX = StartX;
            MusikStartY = StartY;
            MusikEndX = EndX;
            MusikEndY = EndY;
            Score++;
        }
    }
    if (Mom==false) {
        if (StartX <= MomStartX + 20 && StartX >= MomStartX - 20 && StartY <= MomStartY + 5 && StartY >= MomStartY - 5
     && EndX <= MomEndX + 20 && EndX >= MomEndX - 20 && EndY <= MomEndY + 5 && EndY >= MomEndY - 5) {
            //alert('Mom' + FillStyleIndex);
            MomColor = FillStyleIndex;
            Mom = true;
            MomStartX = StartX;
            MomStartY = StartY;
            MomEndX = EndX;
            MomEndY = EndY;
            Score++;
        }
        else if (EndX <= MomStartX + 10 && EndX >= MomStartX - 10 && EndY <= MomStartY + 5 && EndY >= MomStartY - 5
     && StartX <= MomEndX + 20 && StartX >= MomEndX - 20 && StartY <= MomEndY + 5 && StartY >= MomEndY - 5) {
            //alert('Mom' + FillStyleIndex);
            MomColor = FillStyleIndex;
            Mom = true;
            MomStartX = StartX;
            MomStartY = StartY;
            MomEndX = EndX;
            MomEndY = EndY;
            Score++;
        }
    }
    if (Gemnut==false) {
        if (StartX <= GemnutStartX + 20 && StartX >= GemnutStartX - 20 && StartY <= GemnutStartY + 5 && StartY >= GemnutStartY - 5
     && EndX <= GemnutEndX + 20 && EndX >= GemnutEndX - 20 && EndY <= GemnutEndY + 5 && EndY >= GemnutEndY - 5) {
            //alert('Gemnut' + FillStyleIndex);
            GemnutColor = FillStyleIndex;
            Gemnut = true;
            GemnutStartX = StartX;
            GemnutStartY = StartY;
            GemnutEndX = EndX;
            GemnutEndY = EndY;
            Score++;
        }
        else if (EndX <= GemnutStartX + 10 && EndX >= GemnutStartX - 10 && EndY <= GemnutStartY + 5 && EndY >= GemnutStartY - 5
     && StartX <= GemnutEndX + 20 && StartX >= GemnutEndX - 20 && StartY <= GemnutEndY + 5 && StartY >= GemnutEndY - 5) {
            //alert('Gemnut' + FillStyleIndex);
            GemnutColor = FillStyleIndex;
            Gemnut = true;
            GemnutStartX = StartX;
            GemnutStartY = StartY;
            GemnutEndX = EndX;
            GemnutEndY = EndY;
            Score++;
        }
    }
    CheckWords();

}



function CheckWords() {
    if (GridLocked) {
        DrawGridLocked();
    }
    if (Cold) {
        DrawCold();
    }
    if (Donut) {
        DrawDonut();
    }
    if (Cocci) {
        DrawCocci();
    }
    if (Duding) {
        DrawDuding();
    }
    if (BedSore) {
        DrawBedSore();
    }
    if (Tic) {
        DrawTic();
    }
    if (Zebra) {
        DrawZebra();
    }
    if (Numerous) {
        DrawNumerous();
    }
    if (Sky) {
        DrawSky();
    }
    if (Bay) {
        DrawBay();
    }
    if (King) {
        DrawKing();
    }
    if (Rum) {
        DrawRum();
    }
    if (CatBoat) {
        DrawCatBoat();
    }
    if (CaulKing) {
        DrawCaulKing();
    }
    if (Noci) {
        DrawNoci();
    }
    if (Pacyks) {
        DrawPacyks();
    }
    if (Pouting) {
        DrawPouting();
    }
    if (Quaint) {
        DrawQuaint();
    }
    if (Vapid) {
        DrawVapid();
    }
    if (Glib) {
        DrawGlib();
    }
    if (Assay) {
        DrawAssay();
    }
    if (Musik) {
        DrawMusik();
    }
    if (Mom) {
        DrawMom();
    }
    if (Gemnut) {
        DrawGemnut();
    }
    ctx.fillStyle = "black";
    ctx.font = "Bold 32px Arial";
    ctx.fillText("DHUNDO!!!",150,50);
    ctx.fillText("DHUNDO!!!", 150, 50);
    ctx.fillText("DHUNDO!!!", 150, 50);
}



//Particular Words Drawing

function DrawGridLocked() {
    ctx.strokeStyle = FillStyles[GridColor-1];
    DrawSelection(ctx, GridLockedStartX, GridLockedStartY, GridLockedEndX, GridLockedEndY);
}

function DrawCold() {
    ctx.strokeStyle = FillStyles[ColdColor - 1];
    DrawSelection(ctx, ColdStartX, ColdStartY, ColdEndX, ColdEndY);

}

function DrawDonut() {
    ctx.strokeStyle = FillStyles[DonutColor - 1];
    DrawSelection(ctx, DonutStartX, DonutStartY, DonutEndX, DonutEndY);
}

function DrawCocci() {
    ctx.strokeStyle = FillStyles[CocciColor - 1];
    DrawSelection(ctx, CocciStartX, CocciStartY, CocciEndX, CocciEndY);
}

function DrawDuding() {
    ctx.strokeStyle = FillStyles[DudingColor - 1];
    DrawSelection(ctx, DudingStartX, DudingStartY, DudingEndX, DudingEndY);
}
function DrawBedSore() {
    ctx.strokeStyle = FillStyles[BedSoreColor - 1];
    DrawSelection(ctx, BedSoreStartX, BedSoreStartY, BedSoreEndX, BedSoreEndY);
}
function DrawTic() {
    ctx.strokeStyle = FillStyles[TicColor - 1];
    DrawSelection(ctx, TicStartX, TicStartY, TicEndX, TicEndY);
}
function DrawZebra() {
    ctx.strokeStyle = FillStyles[ZebraColor - 1];
    DrawSelection(ctx, ZebraStartX, ZebraStartY, ZebraEndX, ZebraEndY);
}
function DrawNumerous() {
    ctx.strokeStyle = FillStyles[NumerousColor - 1];
    DrawSelection(ctx, NumerousStartX, NumerousStartY, NumerousEndX, NumerousEndY);
}
function DrawSky() {
    ctx.strokeStyle = FillStyles[SkyColor - 1];
    DrawSelection(ctx, SkyStartX, SkyStartY, SkyEndX, SkyEndY);
}
function DrawBay() {
    ctx.strokeStyle = FillStyles[BayColor - 1];
    DrawSelection(ctx, BayStartX, BayStartY, BayEndX, BayEndY);
}
function DrawKing() {
    ctx.strokeStyle = FillStyles[KingColor - 1];
    DrawSelection(ctx, KingStartX, KingStartY, KingEndX, KingEndY);
}
function DrawRum() {
    ctx.strokeStyle = FillStyles[RumColor - 1];
    DrawSelection(ctx, RumStartX, RumStartY, RumEndX, RumEndY);
}
function DrawCatBoat() {
    ctx.strokeStyle = FillStyles[CatBoatColor - 1];
    DrawSelection(ctx, CatBoatStartX, CatBoatStartY, CatBoatEndX, CatBoatEndY);
}
function DrawCaulKing() {
    ctx.strokeStyle = FillStyles[CaulKingColor - 1];
    DrawSelection(ctx, CaulKingStartX, CaulKingStartY, CaulKingEndX, CaulKingEndY);
}
function DrawNoci() {
    ctx.strokeStyle = FillStyles[NociColor - 1];
    DrawSelection(ctx, NociStartX, NociStartY, NociEndX, NociEndY);
}
function DrawPacyks() {
    ctx.strokeStyle = FillStyles[PacyksColor - 1];
    DrawSelection(ctx, PacyksStartX, PacyksStartY, PacyksEndX, PacyksEndY);
}
function DrawPouting() {
    ctx.strokeStyle = FillStyles[PoutingColor - 1];
    DrawSelection(ctx, PoutingStartX, PoutingStartY, PoutingEndX, PoutingEndY);
}
function DrawQuaint() {
    ctx.strokeStyle = FillStyles[QuaintColor - 1];
    DrawSelection(ctx, QuaintStartX, QuaintStartY, QuaintEndX, QuaintEndY);
}
function DrawVapid() {
    ctx.strokeStyle = FillStyles[VapidColor - 1];
    DrawSelection(ctx, VapidStartX, VapidStartY, VapidEndX, VapidEndY);
}
function  DrawGlib() {
    ctx.strokeStyle = FillStyles[GlibColor - 1];
    DrawSelection(ctx, GlibStartX, GlibStartY, GlibEndX, GlibEndY);
}
function DrawAssay() {
    ctx.strokeStyle = FillStyles[AssayColor - 1];
    DrawSelection(ctx, AssayStartX, AssayStartY, AssayEndX, AssayEndY);
}
function DrawMusik() {
    ctx.strokeStyle = FillStyles[MusikColor - 1];
    DrawSelection(ctx, MusikStartX, MusikStartY, MusikEndX, MusikEndY);
}
function DrawMom() {
    ctx.strokeStyle = FillStyles[MomColor - 1];
    DrawSelection(ctx, MomStartX, MomStartY, MomEndX, MomEndY);
}
function DrawGemnut() {
    ctx.strokeStyle = FillStyles[GemnutColor - 1];
    DrawSelection(ctx, GemnutStartX, GemnutStartY, GemnutEndX, GemnutEndY);
}

function CountTime() {
    CurrentTime++;
    ClearAndWriteWords();

}
function ClearAndWriteWords() {
    Wctx.clearRect(0, 0, 300, 500);
    var WHeight = 70;
    var WWidth = 20;
    Wctx.fillStyle = "#C0F048";
    Wctx.font = "Bold 16px Arial";
    Wctx.strokeText("Score: " + Score + '\t\tAttempts: ' + Attempts + '\tTime: ' + Min + ':' + Sec, 10, 50);

    Words[0] = GridLocked; Words[1] = Cold; Words[2] = Donut; Words[3] = Cocci; Words[4] = Duding; Words[5] = BedSore; Words[6] = Tic; Words[7] = Zebra; Words[8] = Numerous;
    Words[9] = Sky; Words[10] = Bay; Words[11] = King; Words[12] = Rum; Words[13] = CatBoat; Words[14] = CaulKing; Words[15] = Noci; Words[16] = Pacyks; Words[17] = Pouting; Words[18] = Quaint;
    Words[19] = Vapid; Words[20] = Glib; Words[21] = Assay; Words[22] = Musik; Words[23] = Mom; Words[24] = Gemnut;

    AllStrings[0] = 'GridLocked'; AllStrings[1] = 'Cold'; AllStrings[2] = 'Donut'; AllStrings[3] = 'Cocci'; AllStrings[4] = 'Duding'; AllStrings[5] = 'BedSore'; AllStrings[6] = 'Tic'; AllStrings[7] = 'Zebra'; AllStrings[8] = 'Numerous';
    AllStrings[9] = 'Sky'; AllStrings[10] = 'Bay'; AllStrings[11] = 'King'; AllStrings[12] = 'Rum'; AllStrings[13] = 'CatBoat'; AllStrings[14] = 'CaulKing'; AllStrings[15] = 'Noci'; AllStrings[16] = 'Pacyks'; AllStrings[17] =' Pouting'; AllStrings[18] = 'Quaint';
    AllStrings[19] = 'Vapid'; AllStrings[20] = 'Glib'; AllStrings[21] = 'Assay'; AllStrings[22] = 'Musik'; AllStrings[23] = 'Mom'; AllStrings[24] ='Gemnut';


    for (var i = 0; i < Words.length; i++) {
      
        if (Words[i] == false) {
            WHeight = WHeight + 30;
            if (WHeight >= 490) {
                WHeight = 100;
                WWidth = WWidth + 180;
            }
            Wctx.fillText(AllStrings[i].toString(), WWidth, WHeight);
        }
        
    }

}

