const blocks = ['infrastructure','interface','miscelaneous','tools','sports','signs','geometry','transportation','buildings']
const marketing = ['market']
const product = ['empty_state','trigger','full_page']
const video = ['svg_animations']
const content = $('.content')
const pageName = ['blocks', 'product', 'marketing', 'video']
const pageVar = [blocks, product, marketing, video]
const subtitle = $('.level1')

let itemLists = []


function generate(page) {
  const content = $('.content');
  content.html('');
content.prepend(`<div fw>
  <label > Search</label>
  <input style='margin: 10px 0 20px 0; 'id='search' onkeyup='filter()' value='' placeholder='search'/></div>`)
  page.map(element => {
    let folder = `../img/${element}`

    content.append(
      `${element == 'svg_animations'
    ? `
    <br><br><p sytle='max-width:80ch'>
    Animations should use a quadratic tranformation models. <br><h2>UI</h2>In the case of appearing and transforming elements in UI choose a quadractic model decelerating to zero velocity ( easeOutQuad) <br> Make sure the composition does not exceed 600ms throught the animation.

    <h2>Video</h2>

    <kbd>cubic-bezier (0.165, 0.84, 0.44, 1)</kbd> </p></div>
    `
    : ''}
      <h3 class='title ${element}-title'>
        ${element.replace('_', ' ')}
        </h3>

      <div class='${element} grid'></div>`)

    $.ajax({
      url: folder,
      success: function(data) {
        $(data).find("a").attr("href", function(i, val) {

          // if directory has files with the follwoing formats
          if (val.match(/\.(jpe?g|png|svg|gif)$/)) {

            //image path
            let assetName = val.replace(`/img/${element}/`, '');
            let assetPath = `/img/${element}/${assetName}`;
            let cleanPath = assetName.replace(/_/g,' ').replace('%20',' ').replace('.svg','');

            itemLists.push(cleanPath)


            //append images to the section
            $(`.${element}`).append( `
              <a href="${assetPath}" class='${assetName.replace('.svg','').toLowerCase()}' download>${
                $('.subheader').hasClass('dark-subheader')?
                `<div class='image dark-image ${element}-child'
                style='background-image:url(${assetPath})'>

                  <button hcd><span>${cleanPath}</span><span>↓</span> </button>
                </div>`
                :

                `<div class='image ${element}-child'
                style='background-image:url(${assetPath})'>

                  <button hcd><span>${cleanPath}</span><span class='download' style='opacity','0'>↓</span>
                </div>`}

              </a>`)
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
  loadIn(pageVar[0])//
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
