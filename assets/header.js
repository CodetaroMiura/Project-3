let current = 0

const hideHeader = function () {
  const $header = document.querySelector('#header-global')
  const pixels = window.pageYOffset

  if (pixels > 100) {
    $header.classList.add('js-header-hide')
  } else {
    $header.classList.remove('js-header-hide')
  }

  if (pixels < current || pixels < 100) {
    $header.classList.remove('js-header-hide')
  } else {
    $header.classList.add('js-header-hide')
  }

  current = pixels
  return pixels
}

const $banner = document.querySelector('.js-banner')
const $closeButton = $banner.querySelector('.remove-svg')

const closeBanner = function () {
  $banner.classList.remove('banner-slide')
}

const showBanner = function () {
  if (window.innerWidth > 800 && window.location == 'https://elydy.com/') {
    setTimeout(() => $banner.classList.add('banner-slide'), 5000)
    setTimeout(() => closeBanner(), 15000)
  }
}

showBanner()

document.addEventListener('scroll', () => hideHeader())
$closeButton.addEventListener('click', () => closeBanner())
