
window.onload = init;
const toggle = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navigation__list");
window.onresize = ()=>{
}


function init() {
	toggle.onclick = () => {
		navbar.classList.toggle("active");
	};
}


