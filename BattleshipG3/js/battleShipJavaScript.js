$(document).ready(function () {

    var input = "<div class='boardCell'></div>";

    $("#5x5").click(function Game() {
        //alert("Hej");

        for (var i = 0; i < 5; i++) {
            $(".boardBody").append(input);
            for (var i = 0; i < 5; i++) {

                $(".boardBody").append(input);

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