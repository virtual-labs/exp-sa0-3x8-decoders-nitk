window.scrollVar = '';
function modalClose(){
	document.body.classList.remove("modal-open");
	document.querySelector("div.modal-backdrop").removeEventListener("click", modalClose);
	window.scrollTo(0, parseInt(window.scrollVar || '0'));
}
function modalOpen(){
	window.scrollVar = window.scrollY;
	document.body.classList.add("modal-open");
	document.querySelector("div.modal-backdrop").addEventListener("click", modalClose);
	let sidebar = document.querySelector("div.sidebar");
	if(sidebar){
		sidebar.classList.toggle("hidden");
	}
}