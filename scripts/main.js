const heroList = [
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Aatrox.png",
		heroName: "Aatrox",
		heroPosition: "Top, Middle, Jungle"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Akali.png",
		heroName: "Akali",
		heroPosition: "Middle, Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Darius.png",
		heroName: "Darius",
		heroPosition: "Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Garen.png",
		heroName: "Garen",
		heroPosition: "Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Irelia.png",
		heroName: "Irelia",
		heroPosition: "Top, Middle"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Jax.png",
		heroName: "Jax",
		heroPosition: "Top, Jungle"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Katarina.png",
		heroName: "Katarina",
		heroPosition: "Middle"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Pantheon.png",
		heroName: "Pantheon",
		heroPosition: "Jungle, Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Renekton.png",
		heroName: "Renekton",
		heroPosition: "Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Rengar.png",
		heroName: "Rengar",
		heroPosition: "Jungle, Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Shen.png",
		heroName: "Shen",
		heroPosition: "Top, Support"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Sion.png",
		heroName: "Sion",
		heroPosition: "Top, Support"
	}
];

let valueEvent;

const createListBlock = () => {
	const listConteiner = document.createElement('div');
	const listContent = generateHeroesListContent(heroList);

	listConteiner.className = "heroes-list row justify-content-between";
	listConteiner.innerHTML = listContent;

	document.body.insertBefore(listConteiner, document.body.children[1]);
};

const filterByName = (heroes, value) => heroes.filter(({ heroName }) => {
	return heroName.startsWith(value);
});

const filterHeroesByInput = (heroes, inputValue) => heroes.filter(({ heroName }) => {
	const lcHeroName = heroName.toLowerCase();
	const lcInputValue = inputValue.toLowerCase();
	
	return lcHeroName.startsWith(lcInputValue);
});

const generateHeroesListContent = (heroes) => heroes.reduce((acc, el) => {
	acc += `<div class="elem col-md-4 col-sm-6 d-flex"><img src="${ el.url }"><div class='d-flex flex-column'><span class="heroName align-items-start">${ el.heroName }</span><span class="align-items-end heroPosition">${el.heroPosition}</span></div></div>`;
	
	return acc;
}, "");


createListBlock();

const input = document.getElementById('search');
const choise = document.getElementsByClassName('dropdown-menu')[0];

choise.addEventListener('click', function(event){
	if(event.target.classList.contains('dropdown-item')){
		valueEvent = event.target.innerText;
	}
	const filteredList = filterByName(heroList, valueEvent);
	const newListContent = generateHeroesListContent(filteredList);
	const list = document.getElementsByClassName('heroes-list')[0];
	list.innerHTML = newListContent;
});

input.addEventListener('input', (event) => {
	const { value } = event.target;
	const filteredList = filterHeroesByInput(heroList, value);
	const newListContent = generateHeroesListContent(filteredList);
	const list = document.getElementsByClassName('heroes-list')[0];
	list.innerHTML = newListContent;
});