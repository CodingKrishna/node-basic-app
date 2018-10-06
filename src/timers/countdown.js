class Counter {
    constructor(){
        this.timeoutHandle;
        this.countdown = this.countdown.bind(this);
    }
    countdown(minutes) {
        var seconds = 60;
        var mins = minutes
        var self = this;
        function tick() {
          var current_minutes = mins - 1
          seconds--;
          var counter = " 0"
              + current_minutes.toString() + ":"
              + (seconds < 10 ? "0" : "")
              + String(seconds) + " minutes";
        console.log("counter>>", counter);
          if (seconds > 0) {
            self.timeoutHandle = setTimeout(tick, 1000);
          } else {
    
            if (mins > 1) {
              setTimeout(function() {
                self.countdown(mins - 1);
              }, 1000);
            }
          }
        }
        tick();
      }

}

var count = new Counter();
count.countdown(2);