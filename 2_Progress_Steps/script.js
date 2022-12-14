const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')
console.log(circles)

let currentActive = 0

next.addEventListener('click', () => {
	if (currentActive === circles.length) return
	currentActive += 1
	console.log(currentActive)
	update()
})

prev.addEventListener('click', () => {
	if (!currentActive) return
	currentActive -= 1
	console.log(currentActive)
	update()
})

function update() {
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})

	const actives = document.querySelectorAll('.active')
	console.log(actives.length, circles.length)
	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + '%'

	if (currentActive === 0) {
		prev.disabled = true
	} else if (currentActive === circles.length) {
		next.disabled = true
	} else {
		prev.disabled = false
		next.disabled = false
	}
}
