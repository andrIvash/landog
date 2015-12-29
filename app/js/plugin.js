var testModule = (function (){
 var my = {},
      x = 0,
      y = 0;
  var init = function(){
        console.log('Инициализация модуля testModule');
        console.log(x);
      },

      plus = function (){
        x++;
      },
      minus = function () {
        x--;
      },
      show = function () {
        console.log(x);
      }
    
  return {
    init: init,
    plus: plus,
    minus: minus,
    show: show
  }; 

})();

testModule.init();
