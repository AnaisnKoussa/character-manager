const url = "https://character-database.becode.xyz/characters";
const methodGet = {
    method : 'GET'
};

const characterContainer = document.querySelector(".container");

fetch(url, methodGet)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i ++) {
        let section = document.createElement("section");
        characterContainer.appendChild(section);
        section.innerHTML =  `
            <h2>${data[i].name}</h2>
            <img src = "data:image/png;base64,${data[i].image}">
            <h3>${data[i].shortDescription}</h3>
            <a href="#">More informations</a>
        `
        }
    })