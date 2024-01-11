//Cap for how many times the user can play
var turnCount = 5;
var AnimationCount = 5;
var betAmount=0;
//Starting balance
var Balance = 500.00;

//When the balance outputs, it caps it to two decimal places
document.getElementById("balance").innerHTML = Balance.toFixed(2);
const Play = document.getElementById('PlayButton');


Play.onclick = function () {

        var output = 0;

        var Blue = 1.15;
        var Red = 1.30;
        var Yellow = 1.45;
        var Green = 1.60;
        var Purple = 1.75;
        var Orange = 2.00;


        var WheelBlue = false;
        var WheelRed = false;
        var WheelYellow = false;
        var WheelGreen = false;
        var WheelPurple = false;
        var WheelOrange = false;
        var Tripple = false;
        var Quad = false;
        var Nothing = false;


        //Converts each value from a string to a decimal
        var GreenValue = parseFloat(document.getElementById('GreenValue').value);
        var BlueValue = parseFloat(document.getElementById('BlueValue').value);
        var RedValue = parseFloat(document.getElementById('RedValue').value);
        var YellowValue = parseFloat(document.getElementById('YellowValue').value);
        var OrangeValue = parseFloat(document.getElementById('OrangeValue').value);
        var PurpleValue = parseFloat(document.getElementById('PurpleValue').value);


        // Fix for NaN values in the output
        GreenValue = isNaN(GreenValue) || GreenValue === "" ? 0 : GreenValue;
        BlueValue = isNaN(BlueValue) || BlueValue === "" ? 0 : BlueValue;
        RedValue = isNaN(RedValue) || RedValue === "" ? 0 : RedValue;
        YellowValue = isNaN(YellowValue) || YellowValue === "" ? 0 : YellowValue;
        OrangeValue = isNaN(OrangeValue) || OrangeValue === "" ? 0 : OrangeValue;
        PurpleValue = isNaN(PurpleValue) || PurpleValue === "" ? 0 : PurpleValue;

        //total sum of how much the user bets
        betAmount = BlueValue + RedValue + YellowValue + OrangeValue + PurpleValue;

        //if the user tries to bet an amount greater than their balance, it will throw an alert
        if (Balance < betAmount) {
                alert("You don't have enough balance to place this bet!");
                return;
        }


        //Checks to see if the user has money

        if (Balance == 0) {
                alert("You Are Out of Money");
                Play.disabled = true;
                return;
        }

        //Subtracts the users bet amount before starting the game
        Balance = Balance - betAmount;

        //Generates a random number between 0 and 36
        var Landed = Math.floor(Math.random() * 36);

        //Logs the generated number in the console
        console.log(Landed);

        //Make it Spin

        const list = document.getElementById("myDIV").classList;




        if (Landed == 0) {

                list.add("wheel0");
        }
        else if (Landed == 1) {

                list.add("wheel1");

        }
        else if (Landed == 2) {

                list.add("wheel2");

        }
        else if (Landed == 3) {

                list.add("wheel3");

        }
        else if (Landed == 4) {

                list.add("wheel4");

        }
        else if (Landed == 5) {

                list.add("wheel5");

        }
        else if (Landed == 6) {

                list.add("wheel6");

        }
        else if (Landed == 7) {

                list.add("wheel7");
        }
        else if (Landed == 8) {

                list.add("wheel8");

        }
        else if (Landed == 9) {

                list.add("wheel9");

        }
        else if (Landed == 10) {

                list.add("wheel10");

        }
        else if (Landed == 11) {

                list.add("wheel11");

        }
        else if (Landed == 12) {

                list.add("wheel12");

        }
        else if (Landed == 13) {

                list.add("wheel13");

        }
        else if (Landed == 14) {

                list.add("wheel14");

        }
        else if (Landed == 15) {

                list.add("wheel15");

        }
        else if (Landed == 16) {

                list.add("wheel16");

        }
        else if (Landed == 17) {

                list.add("wheel17");

        }
        else if (Landed == 18) {

                list.add("wheel18");

        }
        else if (Landed == 19) {

                list.add("wheel19");

        }
        else if (Landed == 20) {

                list.add("wheel20");

        }
        else if (Landed == 21) {

                list.add("wheel21");
        }
        else if (Landed == 22) {

                list.add("wheel22");

        }
        else if (Landed == 23) {

                list.add("wheel23");

        }
        else if (Landed == 24) {

                list.add("wheel24");

        }
        else if (Landed == 25) {

                list.add("wheel25");

        }
        else if (Landed == 26) {

                list.add("wheel26");

        }
        else if (Landed == 27) {

                list.add("wheel27");

        }
        else if (Landed == 28) {

                list.add("wheel28");

        }
        else if (Landed == 29) {

                list.add("wheel29");

        }
        else if (Landed == 30) {

                list.add("wheel30");

        }
        else if (Landed == 31) {

                list.add("wheel31");

        }
        else if (Landed == 32) {

                list.add("wheel32");

        }
        else if (Landed == 33) {

                list.add("wheel33");

        }
        else if (Landed == 34) {

                list.add("wheel34");

        }
        else if (Landed == 35) {

                list.add("wheel35");

        }
        else if (Landed == 36) {

                list.add("wheel36");

        }






        if (Landed == 0) {
                Quad = true;
        }
        else if (Landed <= 2) {
                Tripple = true;
        }
        else if (Landed <= 5) {
                WheelOrange = true;
        }
        else if (Landed <= 9) {
                WheelPurple = true;
        }
        else if (Landed <= 14) {
                WheelGreen = true;
        }
        else if (Landed <= 20) {
                WheelYellow = true;
        }
        else if (Landed <= 27) {
                WheelRed = true;
        }
        else if (Landed <= 36) {
                WheelBlue = true;
        }
        else {
                Nothing = true;
        }
 
        //Calc for Balance
        if (WheelGreen == true) {
                output = Green * GreenValue;
                turnCount = turnCount - 1;

        } else if (WheelBlue == true) {
                output = Blue * BlueValue;
                turnCount = turnCount - 1;
        } else if (WheelRed == true) {
                output = Red * RedValue;
                turnCount = turnCount - 1;
        } else if (WheelYellow == true) {
                output = Yellow * YellowValue;
                turnCount = turnCount - 1;
        } else if (WheelOrange == true) {
                output = Orange * OrangeValue;
                turnCount = turnCount - 1;
        } else if (WheelPurple == true) {
                output = Purple * PurpleValue;
                turnCount = turnCount - 1;
        }
        else if (Nothing == true) {
                turnCount = turnCount - 1;
        }
        else if (Tripple == true) {
                output = betAmount * 3.00;
                turnCount = turnCount - 1;
        }
        else if (Quad == true) {
                output = betAmount * 4.00;
                turnCount = turnCount - 1;
        }
        else {
                output = 0;
                turnCount = turnCount - 1;
        }




        //Checks if the turn counter is equal to zero, then throws an error and disables the play button
        if (turnCount == 0) {
                alert("You Are Out of Turns");
                Play.disabled = true;
                return;
        }
        if (AnimationCount != 0) {
                list.add("wheel");
        }

        //if user wins, adds their winnings to the balance
        Balance = Balance + output;
        document.getElementById('output').innerHTML = output.toFixed(2);
        document.getElementById("balance").innerHTML = Balance.toFixed(2);
}
