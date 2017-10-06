$(document).ready(function () {

    var input = "<div class='boardCell'></div>";
    var inputArray = [
        [input, input]  
    ];
    $("#5x5").click(function Game5x5() {
        
       
        for (var i = 0; i < 5*5; i++) {
            $(".boardBody").append(input);
            if ((i + 1) % 5 == 0) {
                $(".boardBody").append("<br/>");

            }

           
        }    
      
    });
    $("#10x10").click(function Game10x10() {


        for (var i = 0; i < 10 * 10; i++) {
            $(".boardBody").append(input);
            if ((i + 1) % 10 == 0) {
                $(".boardBody").append("<br/>");

            }


        }

    });
    $("#15x15").click(function Game15x15() {


        for (var i = 0; i < 15 * 15; i++) {
            $(".boardBody").append(input);
            if ((i + 1) % 15 == 0) {
                $(".boardBody").append("<br/>");

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