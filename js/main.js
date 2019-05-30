let header = $('.header');
let item = $('.menu-item');
let tab=$('.tab');
let panel=$('.notice, .pds');

item.attr('tabindex', '0');

item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

header.on('mouseout', function(){
  item.removeClass('menu-act');  
});

tab.on('click keyup', function(e){
  if(e.type === 'click' || e.keyCode === 13){
    panel.removeClass('board-act');
    $(this).parent().addClass('board-act');
  };
});
