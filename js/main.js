document.addEventListener("DOMContentLoaded", function(){

	const allCtaItems = document.querySelectorAll(".cta-item")
	const allPhotoItems = document.querySelectorAll(".photo-item")
	const arrowUpGalery = document.querySelector(".arrow-up")
	const arrowDownGalery = document.querySelector(".arrow-down")
	const counts = document.querySelectorAll(".count")
	const element = document.querySelector('.counter-item')

	const sizeOfOneElement = 100 / allCtaItems.length
	const root = document.documentElement
	const PushDownBtnCtaItem = () => {
		for (let i = 0; i < allCtaItems.length; i++) {
			let x = sizeOfOneElement * (i+1)
			if (!allPhotoItems[i].className.includes('inactive')) {
				allPhotoItems[i].classList.remove('active-photo')
				allCtaItems[i].classList.remove('active-content')
				allPhotoItems[i].classList.add('inactive')
				setStyleGallery(allPhotoItems[i].style, '0px', '0')
				setStyleGallery(allCtaItems[i].style, "0px", '0')
				if (i == allCtaItems.length-1) {
					allPhotoItems[0].classList.remove('inactive')
					setStyleGallery(allPhotoItems[0].style, '100%', '1')
					root.style.setProperty('--progress-top', '0%')
					setStyleGallery(allCtaItems[0].style, "100%", '1')
				} else {
					allPhotoItems[i+1].classList.remove('inactive')
					setStyleGallery(allPhotoItems[i+1].style, '100%', '1')
					root.style.setProperty('--progress-top', x + '%')
					setStyleGallery(allCtaItems[i+1].style, "100%", '1')
				}
				break
			}
		}
	}

	const PushUpBtnCtaItem = () => {
		for (let i = allCtaItems.length-1; i >= 0; i--) {
			let x = sizeOfOneElement * (i-1)
			if (!allPhotoItems[i].className.includes('inactive')) {
				allPhotoItems[i].classList.remove('active-photo')
				allCtaItems[i].classList.remove('active-content')
				allPhotoItems[i].classList.add('inactive')
				setStyleGallery(allPhotoItems[i].style, '0px', '0')
				setStyleGallery(allCtaItems[i].style, '0px', '0')
				if (i == 0) {
					allPhotoItems[allCtaItems.length-1].classList.remove('inactive')
					setStyleGallery(allPhotoItems[allPhotoItems.length-1].style, '100%', '1')
					setStyleGallery(allCtaItems[allCtaItems.length-1].style, '100%', '1')
					x = sizeOfOneElement * (allCtaItems.length-1) 
					root.style.setProperty('--progress-top', x + '%')
				} else {
					allPhotoItems[i-1].classList.remove('inactive')
					setStyleGallery(allPhotoItems[i-1].style, '100%', '1')
					setStyleGallery(allCtaItems[i-1].style, "100%", '1')
					root.style.setProperty('--progress-top', x + '%')
				}
				break
			}
		}
	}

	const setStyleGallery = (style, maxHeight, opacity) => {
		style.maxHeight = maxHeight
		style.opacity = opacity
	}

	function counter () {
		counts.forEach(e => {
			const data = parseInt(e.dataset.total)
			let content = parseInt(e.textContent)
			const intervalId = setInterval(() => {
				if (content < data) {
					content++
				}
				updateValueView(content)
			}, 30)		
			function updateValueView(value) {
				e.textContent = value
			}
		})
	}

	function itemVisible(element) {
		const rect = element.getBoundingClientRect();
		return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= window.innerHeight &&
		rect.right <= window.innerWidth
		);
	}

	function executeCodeAfterElementVisibility(element) {
		if (itemVisible(element)) {
			counter()
		} 
		else {
			window.addEventListener('scroll', () => {
				if (itemVisible(element)) {
					counter()
				}
			})
		}
	} 
	executeCodeAfterElementVisibility(element);

	arrowDownGalery.addEventListener('click',PushDownBtnCtaItem)
	arrowUpGalery.addEventListener('click',PushUpBtnCtaItem)
})



