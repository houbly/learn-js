let isToggleOpen = true;

$('.toggle-button').on('click', () => {
  $('.toggle-list').slideToggle();
  isToggleOpen = !isToggleOpen;
  if(isToggleOpen) {
    $('.toggle-button').html('Show less');
  } else {
    $('.toggle-button').html('Show more');
  }
})