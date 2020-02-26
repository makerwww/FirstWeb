$('#open-modal').click(function(){
    $('.modal-window').fadeIn(1000);
})
$('.modal-window').click(function(e){
    if (e.target == this) $('.modal-window').fadeOut(500);
})

// Код реализации открывающегося окна с использованием  DOM
var openBlock = $('.question-block');
var hiddenBlock = openBlock.find('p');

hiddenBlock.click(function(){
    if ($(this).next().is(':hidden')) {
        $(this).next().slideDown(500);
        $(this).find('img').remove();
        $(this).append(' <img src="img/upArrow.png" alt="" width="32px" height="25px">');

    } else{
        $(this).next().slideUp(500);
        $(this).find('img').remove();
        $(this).append('<img src="img/downArrow.png" alt="" width="25px" height="25px">');
    }
})

