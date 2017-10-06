$(document).ready(function () {

    var input = "<div class='boardCell' id= 'hit')></div>";
 

   
    $("#5x5").click(function Game5x5() {
        var iMax = 5;
        var jMax = 5;
        var f = new Array();

        for (i = 0; i < iMax; i++) {
            f[i] = new Array();
            for (j = 0; j < jMax; j++) {
                f[i][j] = 0;
            }
        }

        var X = Math.floor((Math.random() * (f.length)));
        var Y = Math.floor((Math.random() * (f.length)));


        var ship = [X ,Y];
       

        for (var i = 0; i < f.length; i++) {
          

            for (var j = 0; j < f.length; j++) {
                var hit = [i, j];
                $(".boardBody").append(input);
                
                
                if ((j + 1) % 5 == 0) {
                    $(".boardBody").append("<br/>");
                    
                }


            }
        }
        

      $(".boardCell").click(function Hit() {
          if (hit == ship) {
                var input2 = "<div class='boardCell'>O</div>";
                $("#hit").append(input2);
            }
            else {
                var input3 = "<div class='boardCell' >X</div>";
                $("#hit", ).append(input3);
            }
            


        });
    });
    $("#10x10").click(function Game10x10() {


        var iMax = 10;
        var jMax = 10;
        var f = new Array();

        for (i = 0; i < iMax; i++) {
            f[i] = new Array();
            for (j = 0; j < jMax; j++) {
                f[i][j] = 0;
            }
        }

        var X = Math.floor((Math.random() * (f.length)));
        var Y = Math.floor((Math.random() * (f.length)));


        var ship = [X, Y];


        for (var i = 0; i < f.length; i++) {


            for (var j = 0; j < f.length; j++) {
                var hit = [i, j];
                $(".boardBody").append(input);


                if ((j + 1) % 10 == 0) {
                    $(".boardBody").append("<br/>");

                }


            }
        }

    });
    $("#15x15").click(function Game15x15() {


        var iMax = 15;
        var jMax = 15;
        var f = new Array();

        for (i = 0; i < iMax; i++) {
            f[i] = new Array();
            for (j = 0; j < jMax; j++) {
                f[i][j] = 0;
            }
        }

        var X = Math.floor((Math.random() * (f.length)));
        var Y = Math.floor((Math.random() * (f.length)));


        var ship = [X, Y];


        for (var i = 0; i < f.length; i++) {


            for (var j = 0; j < f.length; j++) {
                var hit = [i, j];
                $(".boardBody").append(input);


                if ((j + 1) % 15 == 0) {
                    $(".boardBody").append("<br/>");

                }


            }
        }

    });

   
});


//        //Skapar en spelplan
//        static char[,] CreateBoard(int shipX, int shipY)
//{
//    int x = shipX;
//    int y = shipY;
//    char[,] gameBoard = new char[x, y];

//    for (int i = 0; i < gameBoard.GetLength(0); i++) //Row
//    {
//        for (int j = 0; j < gameBoard.GetLength(1); j++) //Column
//        {
//            gameBoard[i, j] = ' ';
//        }
//    }
//    return gameBoard;
//}