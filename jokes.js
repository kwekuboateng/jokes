const joke = document.getElementById('joke');
const getJoke = document.getElementById('get-joke');

getJoke.addEventListener('click', fetchJokes);

async function fetchJokes(){
   const jokeRes = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });
    
    let jokejson = await jokeRes.json();
    
    if(jokejson.status === 200){
        joke.innerHTML = jokejson.joke
    }
}