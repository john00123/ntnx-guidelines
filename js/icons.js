
const icons = ['core_icons']
const content = $('.content')
const pageName = ['icons']
const pageVar = [icons]
const subtitle = $('.level1')


function generate(page) {
  const content = $('.content')
  content.html('') //clear page

  page.map(element => {
    let folder = `../img/${element}`
    let title = element.replace('_', ' ')

    content.append(
      `<h3 class='title ${element}-title'> ${title}</h3>
       <div class='${element} grid'></div>`
     ) // pre create grid

    $.ajax( { url: folder, success: function(data) {
      $(data).find("a").attr("href", function(i, val) {
      if (val.match(/\.(jpe?g|png|svg|gif)$/)) {

        //image path
        let assetName  = val.replace(`/img/${element}/`, '')
        let assetPath  = `/img/${element}/${assetName}`
        let darkModeOn = $('.subheader').hasClass('dark-subheader')
        let cleanPath  = assetName.replace(/_/g,' ').replace('%20',' ').replace('.svg','');


        //append image container to the section
        $(`.${element}`).append( `
          <a href="${assetPath}" class='${assetName.replace('.svg','')}' download>
          <div class='image ${darkModeOn ? 'dark-image ':''} ${element}-child' style='background-image:url(${assetPath})'>
            <button hcd> <span>${cleanPath}</span>
              <span class='download' style='opacity','0'>↓</span>
            </button>
          </div>
          </a>`)
        }
        })
      }}) //end of ajax call
  }) // end of mapping
} // end of page generation

//pageLoad
function loadIn(page) {
  content.fadeOut('normal', function() {
    generate(page);
    page == icons? $('.grid').addClass('icon-grid'): null
    setTimeout(function () { content.fadeIn('fast') }, 400)
  })
  content.removeClass('slideDown');
  $('.page-subtitle').text('Icons');
}


//hamburger

$('body').append(`
  <div class='page-selection'>
    <div class='page-nav' vss> <ul></ul> </div>
  </div>`)


pageName.map( page => {
  $('.page-nav ul, .navlinks').append(`<li class='${page}'>${page}</li>`)
})


$('.hamburger').click(() => $('.page-selection').slideToggle('fast'))


// page load
$(window).on("load", function(){
  loadIn(pageVar[0])//
  subtitle.text(pageName[0])
  document.getElementById("search").value = "";
})

function navigate(i){
  $(`.${pageName[i]}`).click(function(){
    $('.page-selection').slideUp('normal')
    loadIn(pageVar[i])
    subtitle.text(pageName[i])
    document.getElementById("search").value = "";
  })
}


navigate(0)

//dark darkModeOn

function darkMode (){
  $('html').toggleClass('dark-html');
  $('.image').toggleClass('dark-image');
  $('.subheader').toggleClass('dark-subheader');
}
$('.main-back').click(darkMode)
