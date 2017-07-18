// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.


  /// Data & Core Business Logic /// 
  const Stopwatch = {
    tickClock: function(){
      if (Stopwatch.isRunning) {
        setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
        Stopwatch.advanceTenMillisecs();
        AppController.handleClockTick();
      }
    },
    isRunning: false,
    mins: 0,
    secs: 0,
    millisecs: 0,
    laps: [],
    // DO NOT EDIT ABOVE THIS LINE

    advanceTenMillisecs: function(){
      this.millisecs += 10;

      if (this.millisecs >= 1000) {
        this.millisecs = 0;
        this.secs++;
      };
      if (this.secs >= 60) {
        this.secs = 0;
        this.mins++;
      };
    },

    reset: function(){
      this.millisecs = 0;
      this.secs = 0;
      this.mins = 0;
    },

    start: function(){
      if (!this.isRunning) {
        this.isRunning = true;
        this.tickClock();
      }

    },
    stop: function(){
      if (this.isRunning === true) {
        (!this.isRunning);
      }
    },
    lap: function(){
      
      if (this.isRunning === true) {
        this.laps.push({
          mins: this.mins, 
          secs: this.secs, 
          millisecs: this.millisecs
        });
      } 

    }
  };

  /// User Interface ///

  const ViewEngine = {
    updateTimeDisplay: function(mins, secs, millisecs){

    $('#mins').html(ViewHelpers.zeroFill(mins, 2));
    $('#secs').html(ViewHelpers.zeroFill(secs, 2));
    $('#millisecs').html(ViewHelpers.zeroFill(millisecs/10, 2));
  },
  
    updateLapListDisplay: function(laps){
    
    var laps = Stopwatch.laps
    var $lapList = $('#lap-list').html('');
    for (var i=0; i <laps < lap.length; i++) {
      append('<li>')ViewHelpers.zeroFill(laps[i].mins, 2) + ":" +
      append('<li>')ViewHelpers.zeroFill(laps[i].secs, 2) + ":" +
      append('<li>')ViewHelpers.zeroFill(laps[i].millisecs/10, 2)
        
    }
    
   ;
    }, 
  };

  const ViewHelpers = {
    zeroFill: function(number, length){

    var stringFromNum = number.toString();
    let numOfZeroes = Math.max(length - stringFromNum.length, 0);
    for( var i = 0; i < (length - stringFromNum.length); i++){
      stringFromNum = '0' + stringFromNum;
    }
    return stringFromNum;
    },
  };

  /// Top-Level Application Code ///
  const AppController = {
    handleClockTick: function(){
      ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    },

    handleClickStart: function() {
      if (!Stopwatch.isRunning) {
        Stopwatch.start();
      }
    },

    handleClickStopReset: function(){
      if (Stopwatch.isRunning === true) {
        Stopwatch.stop();
      } else if (!Stopwatch.isRunning) {
        Stopwatch.reset();
      }
      ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    },

    handleClickLap: function(){

      if (Stopwatch.isRunning === true) {
        Stopwatch.lap();
        ViewEngine.updateLapListDisplay(Stopwatch.laps);
      }
    }
  };

  window.onload = function(){
   // $('#lap').on('click', AppController.handleClickLap);
    $('#start').on('click', AppController.handleClickStart);
    $('#stop').on('click', AppController.handleClickStopReset);
  };
