const url = "https://character-database.becode.xyz/characters";
const methodGet = {
    method : 'GET'
};

const characterContainer = document.querySelector(".container");

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
        const aEditors = document.querySelectorAll(".a-dashboard");
        const dashboard = document.querySelector("#dashboard");
        const main = document.querySelector("main");
        aEditors.forEach(a => {
            a.addEventListener("click", () => {
                console.log(aEditors)
                console.log(a)
                dashboard.remove();
                let section = document.createElement("section");
                main.appendChild(section);
                section.classList.add("character-editor");
                section.innerHTML = `
                    <h2>${data[0].name}</h2>
                    <img src = "data:image/png;base64,${data[0].image}">
                    <h3>${data[0].shortDescription}</h3>
                    <p>${data[0].description}</p>
                    <button id="button-modify" type="button">Modify</button>
                    <button id="button-delete" type="button">Delete</button>   
                `
            })   
        });
    })