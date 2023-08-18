let canvas;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

let pokemon_id;

async function getData (pokemon_id) {
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
    data = await res.json();
    console.log(data);
    render();
}

document.getElementById("Charmander").addEventListener('click', function(){
    pokemon_id = 4;
    getData(pokemon_id);
});

document.getElementById("Bulbasaur").addEventListener('click', function(){
    pokemon_id = 1;
    getData(pokemon_id);
});

document.getElementById("Squirtle").addEventListener('click', function(){
    pokemon_id = 7;
    getData(pokemon_id);
});

function render () {
    document.getElementById('PokeRes').innerHTML = ``;
    const PokeData = document.createElement('div');
    PokeData.innerHTML = `
    <div class="container">
        <div class="pokemon-card" id="${data.name}-card">
            <img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}">
            <h3>${data.name}</h3>
        </div>
    </div>
    <div id="PokemonData" class="cute-box">
        <div class="button-container">
           <button onclick="Devolve()" id="Devolve" class="cute-btn devolve-btn">Devolve</button>
           <button onclick="Evolve()" id="Evolve" class="cute-btn evolve-btn">Evolve</button>
        </div>
        <p id="pokemon-type">${data.types[0].type.name}</p>
        <p id="pokemon-ability">${data.abilities[0].ability.name}</p>
    </div>
    `;
    document.getElementById('PokeRes').appendChild(PokeData);
};

function Evolve(){
    if(pokemon_id == 1 || pokemon_id == 2 || pokemon_id == 4 || pokemon_id == 5 || pokemon_id == 7 || pokemon_id == 8 || pokemon_id == 25 ){
        getData(++pokemon_id);
    }
}

function Devolve(){
    if(pokemon_id == 2 || pokemon_id == 3 || pokemon_id == 5 || pokemon_id == 6 || pokemon_id == 8 || pokemon_id == 9 || pokemon_id == 26){
        getData(--pokemon_id);
    }
}