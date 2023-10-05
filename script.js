//https://superheroapi.com/api/access-token(212073051615192)
//https://superheroapi.com/api/access-token/search/name

//master
const superToken="212073051615192";
const baseURL=`https://superheroapi.com/api.php/${superToken}`;
//DIVS
const heroImgDiv=document.getElementById("hero-img");
const heroNameDiv=document.getElementById("hero-name");
const heroStatsDiv=document.getElementById("hero-stats");

//Buttons
const randomBtn=document.getElementById("random-btn");
const searchBtn=document.getElementById("search-btn");
const inputBox=document.getElementById("input-box");

//RandomNumberFunction
const random=()=>{
  const noOfHeroes=731;
  return Math.floor(Math.random()*noOfHeroes)+1;
}
//RandomHeroFunction
const getRandomSuperHero=(id)=>{
 fetch(`${baseURL}/${id}`)
  .then(response =>response.json())
  .then(json=>{
  
   displayName(json);
   displayStats(json);
   displayImg(json);
    
  })
};
//SearchHeroFunction
const getSearchSuperHero=(name)=>{
  fetch(`${baseURL}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero=json.results[0];

    displayStats(hero);
    displayName(hero);
    displayImg(hero);
  });
  
}

//button.onclicks
searchBtn.onclick=()=>getSearchSuperHero(inputBox.value);
randomBtn.onclick=()=>getRandomSuperHero(random());

const statToEmoji={
  intelligence:'🧠',
  strength:'🦾',
  speed:'🦵',
  durability:'🏋️',
  power:'📊',
  combat:'⚔️',
}
//displayFunctions
const displayStats=(json)=>{
 let stats="" 
   Object.keys(json.powerstats).map(stat =>{    stats+=`<p>${statToEmoji[stat]}${stat.toUpperCase()}: ${json.powerstats[stat]}</p>`
   
  })
 console.log(stats);
  heroStatsDiv.innerHTML=stats;
  
  //alternative(
    // const intelligence=json.powerstats.intelligence;
    // const strength=json.powerstats.strength;
    // const speed=json.powerstats.speed;
    // const durability=json.powerstats.durability;
    // const power=json.powerstats.power;
    // const combat=json.powerstats.combat;
    // heroStatsDiv.innerHTML=`<p>Intelligence:${intelligence}</p><p>Strength:${strength}</p><p>Speed:${speed}</p><p>Durability:${durability}</p><p>Power:${power}</p><p>Combat:${combat}</p>`;)
}

const displayName=(hero)=>{
  const heroName=hero.name;
    heroNameDiv.innerHTML=`<h2>${heroName}</h2>`;
  
}

const displayImg=(hero)=>{
  heroImgDiv.innerHTML=`<img src="${hero.image.url}" height="200" width="200"/>`
}
const arr=["a","b","c"]
console.log(arr.join(''))