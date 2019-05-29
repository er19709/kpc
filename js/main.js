let header = $('.header');
let item = $('.menu-item');

item.attr('tabindex', '0');

item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

header.on('mouseout', function(){
  item.removeClass('menu-act');  
});
