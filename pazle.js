;(function(){
   "use strict";
   
   var DEF = {
      delay: 2500,
   }
   
   function Pazle(options) {
      this._createParametsr(options);
      this._init();
      
   }
   
   var fn = Pazle.prototype;
   
   /* Пользовательские методы */
   
   /**
    * Воспроизводит переданные в массиве слова
    * @param(bool) slow - еcли true - замедленно
    * @param(bool) random - еcли true - в случайном порядке
   */
   fn.playWords = function(words, slow, random) {
      var i = 0;
      var len = words.length;
      this.playActive = true;
      
      var next = (function() {
         console.log(i, len);
         this.findWord(words[i]);
         
         setTimeout(() => {
            this.playWord(slow);
         }, 2000 + 3000);
         
         setTimeout(() => {
            if (!this.playActive) return;
               
            i = (random) ? (Math.random()*len)^0 : (i + 1) % len;
            next();
         }, 2000 + 3000 + 1500);
         
      }.bind(this));
      
      next();
      
   }
   
   fn.stopPlay = function() {
      this.playActive = false;
   }
   
   //Ищет переданного слово в поиске и открывает его
   fn.findWord = function(word) {
      $('#word').val(word).trigger('keydown');
      
      setTimeout(() => {
         var res = $('.j-search_words_not_type.show-balloon.ui-menu-item').first();
         res.trigger('click');
         console.log('find', word);
      }, 2000);
   }
   
   fn.playWord = function(slow) {
      console.log('play');
      var type = +!!slow; //0 || 1 
      var but = $('.balloon__general .balloon__content__btn__play__icon')[type];
      $(but).trigger('click');
   }

   /* Системные методы */
   fn._init = function() {
      this._getElements();
   }
   
   fn._getElements = function() {
      
   }
   
   fn._createParametsr = function(options) {
      this.els = {};
      this.options = $.extend(DEF, options || {});
   }
   
   window.Pazle = Pazle;   
}());

var p = new Pazle({
   delay: 2500,
});

/*
window.t = 1500
window.p = 1 

var i = setInterval(()=>{
	var bt = $('.balloon__content__btn__play__icon')[0];
	if(window.p && bt) {$(bt).trigger('click'); console.log('click')}
}, window.t || 2000);

*/



дождь
снег
ветер
погода
море
океат
река
лед
камень
дерево
облака
небо

вода
хлеб

завтрак
ужин

готовить
магазин
