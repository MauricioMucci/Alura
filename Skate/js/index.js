const botaoMenu = document.querySelector(".cabecalho__botao--menu");
const menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener("click", () => {
	menu.classList.toggle("menu-lateral--ativo");
	botaoMenu.classList.toggle("cabecalho__botao--menu-ativo");
});
