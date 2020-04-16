$('#searching-section').keyup(function(){
  const request =  $('#searching-section').val().toLowerCase();

if (request.length > 0) {
  const $getImage = $('.proj-pictures data-title').text().toLowerCase();
$('.proj-pictures').each(function(){
  if ($(this).indexOf(request) >= 0) {
  $(this).show();
  }
  else {
  $(this).hide();}
});
}
else {
$('.proj-pictures').show();
}
});
