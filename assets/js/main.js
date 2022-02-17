/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle)
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
if (navClose)
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')
const linkAction = () => {
  navMenu.classList.remove('show-menu')
}
navLinks.forEach((el) => {
  el.addEventListener('click', linkAction)
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  if (window.scrollY >= 80) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((el) => {
  const accordionHeader = el.querySelector('.questions__header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(el)

    if (openItem && openItem !== el) toggleItem(openItem)
  })
})
const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions__content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
    return
  }
  accordionContent.style.height = accordionContent.scrollHeight + 'px'
  item.classList.add('accordion-open')
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach((el) => {
    const sectionHeight = el.offsetHeight,
      sectionTop = el.offsetTop - 58,
      sectionId = el.getAttribute('id'),
      navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
      navLink.classList.add('active-link')
    else navLink.classList.remove('active-link')
  })
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  if (window.scrollY >= 200) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](
    iconTheme
  )
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home__data')
sr.reveal('.home__img', {
  delay: 500,
})
sr.reveal('.home__social', {
  delay: 600,
})
sr.reveal('.about__img, .contact__box', {
  origin: 'left',
})
sr.reveal('.about__data, .contact__form', {
  origin: 'right',
})
sr.reveal(
  `
  .steps__card, .product__card, .questions__group, .footer
  `,
  {
    interval: 100,
  }
)
