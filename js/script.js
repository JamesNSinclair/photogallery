let photoCaptions = [];

$('.proj-pictures').each(function () {
	let caption = $(this).children().attr('data-title').toLowerCase();
	photoCaptions.push(caption);
});

$('#searching-section').keyup(function(){
  const request =  $('#searching-section').val().toLowerCase();
    for (let i = 0; i < photoCaptions.length; i ++) {
      if (photoCaptions[i].indexOf(request) < 0) {
      	$('.proj-pictures').eq(i).hide();
      } else {
      	$('.proj-pictures').eq(i).show();
      }
      }
});
