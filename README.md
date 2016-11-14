# javascriptclassextender
Javascript Class Extender Code


To use, just use this parameter. k.extends(javascriptClass,customProperty)

@String javascriptClass
@JSONObject customProperty
e.g.
var foo = function(){
  this.shout = function(){
    alert('parent shout!');
  }
}

var bar = k.extends('foo',{
  shout: function(){
    alert('child shout!');
  }
});

bar.shout();
