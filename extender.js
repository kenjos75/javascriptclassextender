var KenetashiGame = {};

/* Extender class */
(function(module){

  module.extends = function(className,args){

    if(window[className]) {
      var c = new window[className];

      for(var x in args){
        c[x] = args[x];
      }

      return c;
    }else{
      console.log('Classname does not exists.');
      return false;
    }


  }

})(KenetashiGame || {});
