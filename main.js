const nav = document.querySelector('nav')
const opnNav = nav.querySelector('.open-nav')
const clsNav = nav.querySelector('.close-nav')
const navItems = nav.querySelector('.nav-items')

let opened
if (window.innerWidth <= 600) {
	opnNav.addEventListener('click', () => {
		navItems.style.top = nav.clientHeight + "px"
		opnNav.style.display = "none"
		clsNav.style.display = "block"
		if (Math.floor(window.scrollY) > 0) {
			nav.style.backgroundColor = "rgba(0, 0, 0, 1)"
		}
		opened = true
	})

	clsNav.addEventListener('click', () => {
		navItems.style.top = "-1000px"
		opnNav.style.display = "block"
		clsNav.style.display = "none"
		if (Math.floor(window.scrollY) > 0) {
			nav.style.backgroundColor = "rgba(0, 0, 0, .9)"
		}
		opened = false
	})

	window.addEventListener('scroll', () => {
		nav.style.top = '0'
		if (!opened) {
			nav.style.backgroundColor = "rgba(0, 0, 0, .9)"
		} else {
			nav.style.backgroundColor = "rgba(0, 0, 0, 1)"
		}
		navItems.style.backgroundColor = "black"
		if (Math.floor(window.scrollY) <= 5) {
			nav.style.backgroundColor = "rgba(0, 0, 0, .0)"
			nav.style.top = "30px"
			navItems.style.backgroundColor = "transparent"
		}
	})
}

window.addEventListener('scroll', () => {
	nav.style.top = 0
	nav.style.backgroundColor = "black"
	if(Math.floor(window.scrollY) < 5) {
		nav.style.backgroundColor = "transparent"
		nav.style.top = "30px"
		
	}
})
