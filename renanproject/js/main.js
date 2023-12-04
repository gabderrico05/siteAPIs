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


btnGo.addEventListener('click', async (event) => {
    event.preventDefault();

    const getRandomIntegerInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

const getRandomId = getRandomIntegerInclusive(1, 731)
    console.log(getRandomId)
    

const getRandomId2 = getRandomIntegerInclusive(1, 731)
    console.log(getRandomId2)
    
    const result = await fetchApi(getRandomId);

    content.textContent = `${JSON.stringify(result, undefined,
         2)}`;

    images.src = `${result.images.lg}`;


});

