///very arcaic filter


function filter(){
  let searchValue =  $('#search').val().toLowerCase();

  $('a').find(`:not(:contains('${searchValue}'))`).hide();
  $('a').find(`:not(:contains('${searchValue}'))`).parentsUntil($('container')).hide()
  $('a').find(`:contains('${searchValue}')`).show()
  $('a').find(`:contains('${searchValue}')`).parentsUntil($('container')).show()
  searchValue === '' ? $('container').find('h3').show():$('container').find('h3').hide()

  searchValue === '' ? $('.grid').css('padding-bottom','80px') : $('.grid').css('padding-bottom','30px')
}
