$(document).ready(function() {

//global variables
   var wins = 0;
   var losses = 0; 
   var totalScore =0;
   $('#score').html(totalScore);
   var randomNumber = Math.floor((Math.random()*102) + 19);


  
   function random() {

    $("#random-number").html(randomNumber);
   };

  random();
  var firstCrystal = Math.floor((Math.random()*12) + 1);
  var secondCrystal = Math.floor((Math.random()*12) + 1);
  var thirdCrystal = Math.floor((Math.random()*12) + 1);
  var fourthCrystal = Math.floor((Math.random()*12) + 1);

    function reset(){
      randomNumber =Math.floor((Math.random()*102)+19);
    $("#random-number").html(randomNumber);
      totalScore= 0;
      $('#score').html(totalScore);
      } 


    $("#first-crystal").on("click", function() {

      totalScore = totalScore + firstCrystal;
      $('#score').html(totalScore);

    if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(wins);
      reset();
    }
      
   else if (totalScore > randomNumber) {
      losses++;
      $("#loss-count").html(losses);
      reset(); 
    }
  });
$("#second-crystal").on("click", function() {

      totalScore = totalScore + secondCrystal;
      $('#score').html(totalScore);
      
    if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(wins);
      reset();
    }
      
   else if (totalScore > randomNumber) {
      losses++;
      $("#loss-count").html(losses);
      reset(); 
    }
  });
   $("#third-crystal").on("click", function() {

      totalScore = totalScore + thirdCrystal;
      $('#score').html(totalScore);
      
    if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(wins);
      reset();
    }
      
   else if (totalScore > randomNumber) {
      losses++;
      $("#loss-count").html(losses);
      reset(); 
    }
  });
   $("#fourth-crystal").on("click", function() {

      totalScore = totalScore + fourthCrystal;
      $('#score').html(totalScore);
      
    if (totalScore === randomNumber) {
      wins++;
      $("#win-count").html(wins);
      reset();
    }
      
   else if (totalScore > randomNumber) {
      losses++;
      $("#loss-count").html(losses);
      reset(); 
    }
  });
   

    
});
   