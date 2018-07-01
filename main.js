        let colorToGuess;
        //first, we create a function that will generate random colours, RGB. it will take math.floor and multiply by 256
        function randomColor() {
            //pick a "red" from 0 - 255
            let r = Math.floor(Math.random() * 256);
            //pick a "green" from 0 - 255
            let g = Math.floor(Math.random() * 256);
            //pick a "blue" from 0 - 255
            let b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }
        //we need 3 random colours so 
        let numSquares = 3;
        let colors = generateRandomColors(numSquares);
        console.log(colors);
        //at this point we know how to generate one RGB colour. 
        function generateRandomColors(num) {
            //make an array
            let arr = [];
            //add num random colors to arr
            for (let i = 0; i < num; i++) {
                //get random color and push into arr
                arr.push(randomColor());
            }
            //return that array
            return arr;
        }

        const colorPicker = function () {
            //pick the computer choice by random and 
            colors = generateRandomColors(numSquares);
            let color = Math.floor(Math.random() * colors.length);
             colorToGuess = colors[color];

            //make the pink boxes display the colors generate rgb colors from the "colors" array
            $("#1").css("background-color", colors[0]);
            $("#2").css("background-color", colors[1]);
            $("#3").css("background-color", colors[2]);

            console.log(`computer has chosen ${colorToGuess}`);

            //then display the rgb of one of colors array as "colorToGuess" in the #message board
            $("#message").text(colorToGuess);
        }
        //newGame 
        const newGame = function () {
            console.log('clicked new game');
            
            $("#result").hide();
            colorPicker();
            $("body").css("background-color", "");
            $("body").addClass("shades");
         
        }
        // A $( document ).ready() block.
        $(document).ready(function () {
            console.log("ready!");
            newGame();

            //when we click on the square and it matches the color on the message board, we need to say on the message board: "you've won!" and change the body background to the winning color
            $(".box").on("click", function () {
console.log($(this).css("background-color"));
console.log(colorToGuess);


                if ($(this).css("background-color") === colorToGuess) {
                    $("#result").show();
                    $("#result").text("you have won!!");
                    $("body").removeClass("shades");
                    $("body").css("background-color", colorToGuess);
                } else {
                    $("#result").show();
                    $("#result").text("sorry, try again");
                }
            });

            //press the button to trigger NewGame
            // $("button.btn").on("click", newGame());
            $(".btn").on("click", newGame);
        });