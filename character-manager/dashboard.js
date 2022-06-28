const url = "https://character-database.becode.xyz/characters";
const methodGet = {
    method: 'GET'
};
const dashboard = document.querySelector("#dashboard");
const main = document.querySelector("main");
const characterContainer = document.querySelector(".container");

let getCharacterCard = (character) => {
    return `
            <h2>${character.name}</h2>
            <img src = "data:image/png;base64,${character.image}">
            <h3>${character.shortDescription}</h3>
            <a id="a-${character.id}" class="a-dashboard" href="#">More informations</a>
        `;
};

let showDetailsCard = (character) => {
    dashboard.remove();
    let section = document.createElement("section");
    section.classList.add("character-editor");
    section.innerHTML = `
        <h2>${character.name}</h2>
        <img src = "data:image/png;base64,${character.image}">
        <h3>${character.shortDescription}</h3>
        <p>${character.description}</p>
        <button id="button-modify" type="button">Modify</button>
        <button id="button-delete" type="button">Delete</button>   
    `;
    main.appendChild(section);
}

fetch(url, methodGet)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let character = data[i];
            let section = document.createElement("section");
            section.id = 'card-' + character.id;
            section.innerHTML = getCharacterCard(character);
            characterContainer.appendChild(section);
            let a = document.querySelector(`#a-${character.id}`);
            a.addEventListener('click', (e) => {
            e.preventDefault(); 
            showDetailsCard(character);
            });
        }    
    });

























