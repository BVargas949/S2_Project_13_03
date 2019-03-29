"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Bryan Vargas
   Date:   03.27.19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
//All Global variables to be used in functions
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection;

// Run the init function when the browser opens
window.onload = init;

//Runs all the necissary function to make the crowsword user friendly.
function init() {
      //Global variable was assigned CSS selectors and the first object within the AllLetter dataset.
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters[0];
      // Local variables given dataset info
      var acrossID = currentLetter.dataSet.clueA;
      var downID = currentLetter.dataSet.clueD;
      //Global  variables were given specific elements to reference.
      acrossClue = document.getElementById("acrossID");
      downClue = document.getElementById("downID");

      puzzformat(currentLetter);
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.cursor = "pointer";
            document.addEventListener("mousedown", formatPuzzle(e.target.value));
      }
}

// This function changes the colors of the crosword tabel cells
function formatPuzzle(puzzleLetter) {

      //global variables was assign the value of another global variable
      currentLetter = puzzleLetter;

      //The for loop cycles through the letter beckground in order to change their color appropriately.
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.background = "";
      }
      //The Gobal variables were removed from color.
      acrossClue.style.color = "";
      downClue.style.color = "";
      //The if statement is meant to change the datacell to blue or the RGB assigned if the dataset is undefined.
      if (currentLetter.dataSet.clueA != undefined) {
            acrossClue = currentLetter.dataSet.clueA;
            acrossClue.style.color = blue;
            wordLetters = document.querySelectorAll("[data-clue-A] =" + currentLetter.dataSet.clueA);
            wordLetters.style.color = "rgb(231, 231, 255)";
      }
      // Changes data cells from the "Clue D" dataset
      if (currentLetter.dataSet.clueD != undefined) {
            acrossClue = currentLetter.dataSet.clueD;
            acrossClue.style.color = red;
            wordLetters = document.querySelectorAll("[data-clue-D] =" + currentLetter.dataSet.clueA);
            wordLetters.style.color = "rgb(255, 231, 231)";
      }
      if (typeDirection == "right") {
            currentLetter.style.color = "rgb(191, 191, 255)";
      } else {
            currentLetter.style.color = "rgb(255, 191, 191)";
      }

}


/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}