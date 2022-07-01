const input = document.querySelector("#search");
let url = `https://character-database.becode.xyz/characters`;
const methodGet = {
    method: 'GET'
};
const dashboard = document.querySelector("#dashboard");
const main = document.querySelector("main");

let getCharacterCard = (character) => {
    return `
            <h2>${character.name}</h2>
            <img src = "data:image/png;base64,${character.image}">
            <h3>${character.shortDescription}</h3>
            <a id="a-${character.id}" class="a-dashboard" href="#">More informations</a>
        `;
};

input.addEventListener("input", (e) => {
    let name = (e.target.value);
    console.log(name);
    fetch(url, methodGet)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i ++) {
            if(data[i].name === name) {
                let character = data[i];
                dashboard.remove();
                let section = document.createElement("section");
                section.id = "card-" + character.id;
                section.innerHTML = getCharacterCard(character);
                main.appendChild(section);
            } 
        };
    });
});






