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
