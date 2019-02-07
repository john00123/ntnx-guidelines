const blocks = ['geometry','transportation','infrastructure','miscelaneous','tools','sports','signs', 'interface','buildings']
const marketing = ['market']
const product = ['empty_state','trigger','full_page']
const video = ['svg_animations']
const content = $('.content')
const pageName = ['blocks', 'product', 'marketing', 'video']
const pageVar = [blocks, product, marketing, video]
const subtitle = $('.level1')



function generate(page){
  const content = $('.content');
  content.html('');

  page.map(element => {
    let folder =`../img/${element}`

    content.append(`
      <h3 class='title ${element}-title'>
        ${element.replace('_',' ')}
        ${element=='svg_animations'? `<br><br><a>Learn More</a>`:''}</h3>
      <div class='${element} grid'></div>`
    )

    $.ajax({
      url    : folder,
      success: function (data) {
        $(data).find("a").attr("href", function (i, val) {

          // if directory has files with the follwoing formats
          if( val.match(/\.(jpe?g|png|svg|gif)$/)) {

            //image path
            let cleanPath = val.replace(`/img/${element}/`,``)
            .replace(`_`,` `).replace(`%20`,` `)

            //append images to the section
            $(`.${element}`).append( `
              <a href="${val}" download>${
                $('.subheader').hasClass('dark-subheader')?
                `<div class='image dark-image ${element}-child'
                style='background-image:url(${val})'>
                  ${element == 'marketing' ? `<span> In Review </span>`: ''}
                  <button>${cleanPath}</button>
                </div>`
                :

                `<div class='image ${element}-child'
                style='background-image:url(${val})'>
                  ${element == 'marketing' ? `<span> In Review </span>`: ''}
                  <button>${cleanPath}</button>
                </div>`
              }

              </a>`
            )
          }

        })
      }
    })
  })
}

function loadIn(page) {
  content.fadeOut('normal', function() {
    generate(page);
    page == video? player(): null
    setTimeout(function () { content.fadeIn('fast') }, 400);
  })
  content.removeClass('slideDown');
}


$('body').append(`<div class='page-selection'>
  <div class='page-nav' vss>
    <ul>
    <li class='blocks'>${pageName[0]}</li>
    <li class='product'>${pageName[1]} </li>
    <li class='marketing'>${pageName[2]}</li>
    <li class='video'>${pageName[3]}</li>
    <ul>
  </div>
</div>`);

$('.hamburger').click(function(){
  $('.page-selection').slideToggle('normal');
})




// page load

$(window).on("load", function(){
  loadIn(pageVar[0])
  subtitle.text(pageName[0])
})

function navigate(i){
  $(`.${pageName[i]}`).click(function(){
    $('.page-selection').slideUp('normal')
    loadIn(pageVar[i])
    subtitle.text(pageName[i])
  })
}

navigate(0)
navigate(1)
navigate(2)
navigate(3)


$('.main-back').click(function(){
  $('html').toggleClass('dark-html');
  $('.image').toggleClass('dark-image');
  $('.subheader').toggleClass('dark-subheader');
})
