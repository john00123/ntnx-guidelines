///very arcaic filter


function filter(){
  let searchValue =  $('#search').val().toLowerCase();

  $('a').find(`:not(:contains('${searchValue}'))`).hide();
  $('a').find(`:not(:contains('${searchValue}'))`).parentsUntil($('container')).hide()
  $('a').find(`:contains('${searchValue}')`).show()
  $('a').find(`:contains('${searchValue}')`).parentsUntil($('container')).show()
  searchValue === '' ? $('h3').show():$('h3').hide()
}
