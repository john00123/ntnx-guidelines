///very arcaic filter


function filter(){
  let searchValue =  $('#search').val().toLowerCase();

  if (searchValue === '' ) {
    $(`.grid, .card`).show();
    $('container').find('h3').show();
  }
  else{
  $('container').find('h3').hide()
  $(`.grid`).find(`.card:contains('${searchValue}')`) .show();
  $(`.grid`).find(`.card:not(:contains('${searchValue}'))`).hide();

  $(".grid").each(function() {
    if ($(this).find(".card:visible").length == 0) {
      $(this).hide();
      } else {
        $(this).show();
    }
    });
  }

  searchValue === '' ? $('.grid').css('padding-bottom','80px') : $('.grid').css('padding-bottom','20px')

}
