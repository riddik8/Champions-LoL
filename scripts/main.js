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

let a = '';
let b = document.createElement('div');
b.className = "row justify-content-between";
heroList.forEach(el =>{
	a+=`<div class="elem col-md-4 col-sm-6 d-flex"><img src="${ el.url }"><div class='d-flex flex-column'><span class="heroName align-items-start">${ el.heroName }</span><span class="align-items-end heroPosition">${el.heroPosition}</span></div></div>`;
});
b.innerHTML = a;
document.body.insertBefore(b, document.body.children[1]);
//document.querySelector(".row").appendChild(a);
console.log(a);