const url = "https://character-database.becode.xyz/characters";
const methodGet = {
    method : 'GET'
};
const characterContainer = document.querySelector(".container");
const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
    fetch(url, methodGet)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i ++) {
        let section = document.createElement("section");
        characterContainer.appendChild(section);
        section.innerHTML =  `
            <h2>${data[i].name}</h2>
            <img src = "data:image/png;base64,${data[i].image}">
            <h3>${data[i].shortDescription}</h3>
            <a class="a-dashboard" href="#">More informations</a>
        `
        }
    })
})
