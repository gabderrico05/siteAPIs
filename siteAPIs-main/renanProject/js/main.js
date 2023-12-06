const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content')
const images = document.getElementById('img');

 

const fetchApi = (value) => {
    const result = fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${value}.json`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });

    return result;
   
}


const characterId2 = document.getElementById('characterId2');
const content2 = document.getElementById('content2')
const images2 = document.getElementById('img2');

const fetchApi2 = (value) => {
    const result2 = fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${value}.json`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });

    return result2;
   
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name')
    const content = document.getElementById('content')

    const name2 = document.getElementById('name2')
    const content2 = document.getElementById('content2')

    const getRandomIntegerInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

const getRandomId = getRandomIntegerInclusive(1, 731)
    console.log(getRandomId)
    

const getRandomId2 = getRandomIntegerInclusive(1, 731)
    console.log(getRandomId2)
    
    const result2 = await fetchApi2(getRandomId2);
    const result = await fetchApi(getRandomId);
    
    images2.src = `${result2.images.lg}`;
    name2.innerHTML = `<p>${result2.name}</p>`
    content2.innerHTML =`
    <ul>
    <li>COMBATE: ${result2.powerstats.combat}</li>
    <li>RESISTÊNCIA: ${result2.powerstats.durability}</li>
    <li>INTELIGÊNCIA: ${result2.powerstats.intelligence}</li>
    <li>PODER: ${result2.powerstats.power}</li>
    <li>VELOCIDADE: ${result2.powerstats.speed}</li>
    <li>FORÇA: ${result2.powerstats.strength}</li>
    </ul>
    `

    images.src = `${result.images.lg}`;
    name.innerHTML = `<p>${result.name}</p>`
   content.innerHTML =`
   <ul>
   <li>COMBATE: ${result.powerstats.combat}</li>
   <li>RESISTÊNCIA: ${result.powerstats.durability}</li>
   <li>INTELIGÊNCIA: ${result.powerstats.intelligence}</li>
   <li>PODER: ${result.powerstats.power}</li>
   <li>VELOCIDADE: ${result.powerstats.speed}</li>
   <li>FORÇA: ${result.powerstats.strength}</li>
   </ul>
   `
});



