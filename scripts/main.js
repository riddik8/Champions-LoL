const champions = [
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Aatrox.png",
		name: "Aatrox",
		position: "Top, Middle, Jungle"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Akali.png",
		name: "Akali",
		position: "Middle, Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Darius.png",
		name: "Darius",
		position: "Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Garen.png",
		name: "Garen",
		position: "Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Irelia.png",
		name: "Irelia",
		position: "Top, Middle"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Jax.png",
		name: "Jax",
		position: "Top, Jungle"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Katarina.png",
		name: "Katarina",
		position: "Middle"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Pantheon.png",
		name: "Pantheon",
		heroPosition: "Jungle, Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Renekton.png",
		name: "Renekton",
		position: "Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Rengar.png",
		name: "Rengar",
		position: "Jungle, Top"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Shen.png",
		name: "Shen",
		position: "Top, Support"
	},
	{
		url: "https://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/Sion.png",
		name: "Sion",
		position: "Top, Support"
	}
];

const createListBlock = () => {
	const mainContainer = document.createElement('div');
	mainContainer.className = "container";
	const listContainer = document.createElement('div');
	const listContent = generateHeroesListContent(champions);

	listContainer.className = "heroes-list row justify-content-between";
	listContainer.innerHTML = listContent;
	mainContainer.appendChild(listContainer);
	document.querySelector("main").appendChild(mainContainer);
};

const filterHeroesByInput = (heroes, inputValue) => heroes.filter(({ name }) => {
	const championName = name.toLowerCase();
	const lcInputValue = inputValue.toLowerCase();
	
	return championName.includes(lcInputValue);
});

const generateHeroesListContent = (heroes) => heroes.reduce((acc, el) => {
	acc += `<div class="elem col-md-4 col-sm-6 d-flex"><img src="${el.url}">
				<div class='d-flex flex-column'>
					<span class="hero-name align-items-start">
						${el.name}
					</span>
					<span class="align-items-end hero-position">
						${el.position}
					</span>
				</div>
			</div>`;
	return acc;
}, "");


createListBlock();

const input = document.querySelector('#search');
const choise = document.querySelector('.championsDropdown');

choise.addEventListener('click', (event) => {
	let valueEvent = event.target.classList.contains('dropdown-item') ? event.target.getAttribute('data-champion-name') : "";
	const filteredList = filterHeroesByInput(champions, valueEvent);
	const newListContent = generateHeroesListContent(filteredList);
	const list = document.querySelector('.heroes-list');
	list.innerHTML = newListContent;
});

input.addEventListener('input', (event) => {
	const filteredList = filterHeroesByInput(champions, event.target.value);
	const newListContent = generateHeroesListContent(filteredList);
	const list = document.querySelector('.heroes-list');
	list.innerHTML = newListContent;
});