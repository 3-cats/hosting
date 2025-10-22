function setupTabs(){
	document.querySelectorAll(".tabs__button").forEach(button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement;
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab;
			const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

			sideBar.querySelectorAll(".tabs__button").forEach(button => {
				button.classList.remove("tabs__button--active");
			});

			tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
				tab.classList.remove("tabs__content--active");
			});

			button.classList.add("tabs__button--active");
			tabToActivate.classList.add("tabs__content--active");
		});
	});
}

function img_proy(){
	const images = [
	'img/TimePhoto_20190822_140042.jpg',
	'img/IMG_20200601_223612738.jpg'];

	/*calcula un numero aleatorio*/
	const aleatorio = Math.floor(Math.random() * images.length)

	/*obtiene el identificador del elemento*/
	const image = document.getElementById("P_imgs");
	
	/*define el indice según el número aleatorio creado*/
	image.src = images[aleatorio];
	console.log("Ejecutando la función img_proy " + aleatorio);
}
setInterval(img_proy, 8000)

document.addEventListener("DOMContentLoaded", () => {
	setupTabs();
});