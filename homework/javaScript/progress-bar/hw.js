// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').textContent = timerValue;
  },

  drawProgressBars: function(timerValue){
    var timePassed = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timePassed + '%';
  },

//get element
//expand width to fit parent element
//expansion based on timer countdown

  drawLitFuses: function(timerValue){
    var timePassed = 98 - timerValue;
    document.getElementsByClassName('burnt')[0].style.width = timePassed + '%'; 
    document.getElementsByClassName('unburnt')[0].style.width = timePassed - '%'; 
  },
   
//get element
//expand burnt width
//decrease unburnt width
//changes based on countdown
// ????????

  drawCrawlers: function(timerValue){
  
    document.getElementsByClassName('crawler')[0]
  
  }
};

//get element-crawler
//move 10px right
//move 10px updown same time
//based on countdown
//??????????