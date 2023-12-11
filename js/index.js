const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu')
		})
	}
}

showMenu('nav-toggle', 'nav-menu')

const navigationLink = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navigationLink.forEach((n) => n.addEventListener('click', linkAction))

const resumeSelections = document.querySelectorAll('.selection[id]')

function scrollActiveSelection() {
	const scrollY = window.scrollY

	resumeSelections.forEach((current) => {
		const selectionHeight = current.offsetHeight
		const selectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if (scrollY > selectionTop && scrollY <= selectionTop + selectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActiveSelection)

function scrollTop() {
	const scrollTopElement = document.getElementById('scrollTop')
	if (this.scrollY >= 560) {
		scrollTopElement.classList.add('show-scroll')
	} else {
		scrollTopElement.classList.remove('show-scroll')
	}
}

window.addEventListener('scroll', scrollTop)

const changeThemeButton = document.getElementById('themeButton')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light')
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun')

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
