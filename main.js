$(document).on('ready', function() {
  
});
	
$('.edit-box').on('mouseover', function(e) {
	$(e.target).css('backgroundColor', '#FFFFC9');
	$(e.target).css('color', '#DFDCE3');
});
	
$('.edit-box').on('mouseout', function(e) {
	$(e.target).css('backgroundColor', '#FFF');
	$(e.target).css('color', '#000');
});

// $('.edit-box').hide();

$('.edit-box').on('click', function() {
  $('.hidden-textarea').show();
  $('hidden-textarea').css(
  		'width', 500;
  		'height', 50;
  		'display', 'none'
  	);
});

// var newText = $('.input-box') {
// 	$('.edit-box').append(newText);
// 	$('.edit-box').remove();
// });





