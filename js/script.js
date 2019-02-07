const blocks = ['geometry','transportation','infrastructure','miscelaneous','tools','sports','signs', 'interface','buildings']
const marketing = ['market']
const product = ['approved']
const video = ['gif','easter']
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
      <h3 class='title'>${element}</h3>
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
    setTimeout(function () {
      content.fadeIn('normal', function() {
        //Stuff to do *after* the animation takes place
      })
    }, 700);
  })
  content.removeClass('slideDown');
}


// page load

$(window).on("load", function(){
  loadIn(pageVar[3])
  subtitle.text('Building Blocks')
})

$('.subheader li').eq(0).click(function(){
  loadIn(pageVar[0])
  subtitle.text('Building Blocks')
})
$('.subheader li').eq(1).click(function(){
  loadIn(pageVar[1])
  subtitle.text('Product')
})
$('.subheader li').eq(2).click(function(){
  loadIn(pageVar[2])
  subtitle.text('Marketing')
})
$('.subheader li').eq(3).click(function(){
  loadIn(pageVar[3])
  subtitle.text('Video')
})
$('.main-back').click(function(){
  $('html').toggleClass('dark-html');
  $('.image').toggleClass('dark-image');
  $('.subheader').toggleClass('dark-subheader');
})


// lottie
$('.subheader li').eq(3).click()
$('.easter').append(`<div id='lottie'>jj</div>`)

var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: '/lottie/data.json', // Required
  renderer: 'html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})
