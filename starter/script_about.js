
window.onload = init;
const toggle = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navigation__list");
window.onresize = ()=>{
storyVideoResize();
}


function init() {
storyVideoResize();

	toggle.onclick = () => {
		navbar.classList.toggle("active");
		console.log("testt");
	};
}


function storyVideoResize(){
	let video = document.getElementById("story-video");
		if (window.innerWidth <= 600) {
			let width = window.innerWidth - 30 + "";
			video.setAttribute("width", `${width}`);
		}
}