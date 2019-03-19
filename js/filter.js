///very arcaic filter


function filter(){
  let searchValue =  $('#search').val().toLowerCase();

  if (searchValue === '' ) {
    $('section, .grid, .card').show();
    $('container').find('h3').show();
    $('.grid').css('padding-bottom','80px')
  }
  else {
    $(`.grid`).find(`.card:contains('${searchValue}')`) .show();
    $(`.grid`).find(`.card:not(:contains('${searchValue}'))`).hide();
    $('.grid').css('padding-bottom','20px');

    // removes section when empty
    $("section").each(function() {
      $(this).show()
      if(!($(this).find(".card").is(':visible'))){ $(this).hide()}
    })
  }
}
