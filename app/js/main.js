(function(window, $){
   var my = {},
      x = 1,
      y = 0;
  
  publicInterface();
  
  //attachEvents();
  
  
  
   //my.disable();
  
  function publicInterface(){
     my = $.extend(my,{
       show: function(){
          console.log(x);
       },
       init: function (){
          console.log('hello world');
       }
     });
  };
  
  window.bloker = my;
})(window, jQuery);