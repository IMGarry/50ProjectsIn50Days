// const active = document.querySelector('.active')
// console.log(active)

const panels = document.querySelectorAll('.panel')

// function remove (active) {
//   active.classList.remove('active')

// }
panels.forEach((panel) =>
	panel.addEventListener('click', function () {
		panels.forEach((panel) => panel.classList.remove('active'))
		panel.classList.add('active')
	})
)

// function removeActiveClasses() {
// 	panels.forEach((panel) => panel.classList.remove('active'))
// }
