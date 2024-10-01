const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const menu = document.getElementById('menu')
const btn = document.getElementById('menu-btn')
const logo = document.getElementById('logo')

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

btn.addEventListener('click', navToggle)

function onTabClick(e) {
  // Remove all borders
  tabs.forEach((tab) =>
    tab.children[0].classList.remove(
      'border-b-4',
      'md:border-b-0',
      'border-softRed'
    )
  )

  // Deactivate all panels
  panels.forEach((panel) => panel.classList.add('hidden'))

  // Activate a new tab and panel
  e.target.classList.add('border-b-4', 'border-softRed')
  const classString = e.target.getAttribute('data-target')
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
} // end function onTabClick

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', 'images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', 'images/logo-bookmark.svg')
  }
}
