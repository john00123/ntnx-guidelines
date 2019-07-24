const blocks = ['infrastructure','interface','miscelaneous',
'tools','sports','signs','geometry','transportation','buildings']
const marketing = ['market']
const empty     = ['empty_states']
const widgets   = ['widgets']
const video     = ['svg_animations']
const content   = $('.content')
const pageName  = ['Empty_States', 'Widgets']
const pageVar   = [empty, widgets]
const subtitle  = $('.level1')


function generate(page) {

  content.html('') //clears page before appending

  page.map(element => {
    let folder = `../img/${element}`
    let title  = element.replace('_', ' ')

    content.append(`
      <section class='${element}-section' fw>
        <h3 class='section-title ${element}-title'> ${title}</h3>
        <div class='grid ${element}'></div>
      </section>
        `
     ) // pre create grid

    $.ajax( { url: folder, success: function(data) {
      $(data).find("a").attr("href", function(i, val) {
      if (val.match(/\.(jpe?g|svg|gif)$/)) {

        //image path
        let cleanName  = val.replace(`/img/${element}/`, '').replace('(1x1)','').replace('(2x1)','')
        let assetName  = val.replace(`/img/${element}/`, '')
        let assetPath  = `/img/${element}/${assetName}`
        let pngPath  = `/img/${element}/${assetName.replace('.svg','@2x.png')}`
        let darkModeOn = $('.subheader').hasClass('dark-subheader')
        let cleanPath  = cleanName.replace(/_/g,' ').replace('%20',' ').replace('.svg','');


        //append image container to the section

        $(`.${element}`).append( `
          <div class='card ${assetName.replace('.svg','')} ${darkModeOn ? 'dark-card ':''}'>
            <div class='card-header' hcd>
              <p hcd> ${cleanPath}</p>
              <div>
                <a  href="${pngPath  }"><button> PNG </button></a>
                <a  href="${assetPath}"><button> SVG </button></a>
              </div>
            </div>
            <div class='image ${element}-child'
                 style='background-image:url("${assetPath}")'>
            </div>
          </div>`
        )
      }
      })
    }}) //end of ajax call
  }) // end of mapping
} // end of page generation

//pageLoad
function loadIn(page) {
  content.fadeOut('normal', function() {
    generate(page);
    page == video? player(): null
    setTimeout(function () { content.fadeIn('fast') }, 400)
  })
  content.removeClass('slideDown');
}


//hamburger

$('body').append(`
  <div class='page-selection'>
    <div class='page-nav' fw vss> <ul></ul> </div>
  </div>`)
pageName.map( page => {
  $('.page-nav ul, .navlinks').append(`<li class='${page}'>${page.replace('_',' ')}</li>`)
})
$('.hamburger').click(() => $('.page-selection').slideToggle('fast'))


// page load
$(window).on("load", function(){
  loadIn(pageVar[0])//
  subtitle.text(pageName[0].replace('_',' '))
  document.getElementById("search").value = "";
})

function navigate(i){
  $(`.${pageName[i]}`).click(function(){
    $('.page-selection').slideUp('normal')
    loadIn(pageVar[i])
    subtitle.text(pageName[i].replace('_',' '))
    document.getElementById("search").value = "";
  })
}


navigate(0)
navigate(1)
navigate(2)
navigate(3)


//dark darkModeOn

function darkMode (){
  $('html').toggleClass('dark-html');
  $('.card').toggleClass('dark-card');
  $('.subheader').toggleClass('dark-subheader');
}
$('.main-back').click(darkMode)
