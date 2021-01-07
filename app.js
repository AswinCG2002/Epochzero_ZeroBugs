function rand(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function DoDroplett(){
  var contOffset = $('.cont').offset();
  var x = contOffset.left + rand(0,1000);
  var y = contOffset.top + rand(0,520);
  RingAnim(x,y);
  setTimeout(DoDroplett, 5000);
}

$(function(){
  var letters = ['E','P','O','C','H','Z','E','R','O'];
  var j = 0;
  for(var i = 0; i < 840; i++){
    $('body .cont').append('<div class="r">' + letters[j] + '</div>');
    j++;
    if (j >= letters.length) j = 0;
  }
  
  DoDroplett();
  
  $('body').bind('click', function(e){
    RingAnim(e.pageX, e.pageY);
  });
  
});

var animID;
var ringOrigin;
var ringRadius = 0;
function RingAnim(x, y){
  clearInterval(animID);
  
  ringOrigin = {top:y, left:x };
  ringRadius = 0;
    
  animID = setInterval(function(){
    ringRadius += 20;
    if (ringRadius > 1600){
      clearInterval(animID);
      $('.cont .r').removeClass('on'); 
      return;
    }
    GetElementsInRadius('.cont .r', ringOrigin, ringRadius);
  },1); 
}

function GetElementsInRadius(selector, origin, radius, thickness = 80){
  $(selector).each(function(){
    var left, right, top, bottom, offset, cX, cY, dX, dY, d = 0;
    
    offset = $(this).offset();
    left = offset.left;
    top = offset.top;
    right = left + $(this).outerWidth();
    bottom = top + $(this).outerHeight();
    
    cX = origin.left > right ? right : origin.left > left ? origin.left : left;
    cY = origin.top > bottom ? bottom : origin.top > top ? origin.top : top;
    
    dX = Math.abs(cX - origin.left);
    dY = Math.abs(cY - origin.top);
    d = Math.sqrt(dX * dX + dY * dY);
    
    $(this).toggleClass('on', (d < radius / 2 && d > (radius / 2) - thickness));
  });
}
  // JavaScript Document