///very arcaic filter


function filter(){
  let searchValue =  $('#search').val().toLowerCase();
  $('a').find(`:contains('${searchValue}')`).fadeIn('fast', function() {
  });

  $('a').find(`:not(:contains('${searchValue}'))`).fadeOut('fast', function(){
  });

  if(searchValue === ''){
    $('h3').show()
  }

}
