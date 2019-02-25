///very arcaic filter


function filter(){
  let searchValue =  $('#search').val().toLowerCase();
  $('a').find(`:contains('${searchValue}')`).fadeIn('fast', function() {
    $('.grid').toggleClass('togglelicious');
  });
  $('a').find(`:not(:contains('${searchValue}'))`).fadeOut('fast', function(){
    $('h3').hide();
  });

  if(searchValue === ''){
    $('h3').show()
  }

}
