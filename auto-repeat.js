;(function(){
   
   function AutoRepeat(options) {
      this._createParametrs(options);
      
      if (this.run) this.play();
   }
   
   var fn = AutoRepeat.prototype;
   
   fn.play = function() {
      setTimeout(function repeat() {
         if (!this.run) return;
         
         var but = this._getBallonButton();
         if (!but.length) return;
         
         but.trigger('click');
         this.repeatCount++;
         
         setTimeout(repeat.bind(this), this.speed);
      }.bind(this), this.speed);
   }
   
   fn.stop = function() {
     this.run = false;
   }
   
   fn._getBallonButton = function() {
      return $('.balloon__content__btn__play__icon').eq(+this.slow);
   }
   
   fn._createParametrs = function(options) {
      this.run = options.run || true;
      this.speed = options.interval || 1500;
      this.slow = options.slow || false;
      
      this.repeatCount = 0;
   }
   
   window.AutoRepeat = AutoRepeat;
   
}());

var ar = new AutoRepeat({
   run: true,
   speed: 1500,
   slow: false,
});
