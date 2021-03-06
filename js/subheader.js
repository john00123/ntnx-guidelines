//Nutanix Logo
const backArrow = `
<?xml version="1.0" encoding="UTF-8"?>
<svg
  class='main-back' width="6px" height="10px" viewBox="0 0 6 10" version="1.1"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <polyline
    transform="translate(-29,0)" fill="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" stroke="#22A5F7"
    points="34 1 30 5 34 9"></polyline>
</svg>
`


//render header
$('.subheader').append(`
  <div class='compress' hcd>
    <div class='back-section' hcs>
      <h2 class='page-subtitle' hcs >Illustrations</h2>
      <h3 class='level1' alt></h3> ${search}
      <input id='search' onkeyup='filter()' value='' placeholder='All Results'/>
    </div>
    <div class='navlinks' hcs></div>
    <div class='hamburger'><span class='patty'></span></div>
  </div>
`);

//active selection
$('.subheader li').eq(0).addClass('active');

$('.subheader li').click(function(){
  $('.subheader li').removeClass('active');
  $(this).addClass('active')
});


$(window).on("load", function() {
  $('.subheader').addClass('slideDown');
  $('container').addClass('slideDown');
  $('body').scrollTop(0);
});
