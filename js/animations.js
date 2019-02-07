
function player(){

  const animate = ['coinsA','coinsB','coinsC','coinsD','coinsE','foundation','prism','prism2']

  animate.map( value => {
    $('.json').append(`<div class='image ${value == 'coinsA' ? `double`:''}' id=${value}></div>`)
    let animation = bodymovin.loadAnimation({
      container: document.getElementById(value),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `js/lottie/${value}.json`
    });
  })

}
