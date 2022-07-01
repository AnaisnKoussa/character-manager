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
    const deleteButton = document.querySelector("#button-delete");
    deleteButton.addEventListener('click', () => {
        let text = "Are you sure ?";
        if (confirm(text) == true) {
            fetch(`https://character-database.becode.xyz/characters/${character.id}`,{method:'DELETE'});
            section.innerHTML = `
            <p>The character is deleted !</p>
            `
        } 
    })

    const modifyButton = document.querySelector("#button-modify");
    modifyButton.addEventListener('click', () => {
        const section = document.createElement("section");
        main.appendChild(section);
        section.classList.add("character-creaction");
        section.innerHTML = `
        <form>
            <label for="name"></label>Name :</br></br>
            <input type="text" id="name" name="name"></br></br>
            <label for="sdescription">Short Description :</label></br></br>
            <textarea id="sDescription" type="text"></textarea></br></br>
            <label for="description">Description :</label></br></br>
            <textarea id="description"></textarea></br></br>
            <label for="image"></label>Image :</br></br>
            <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png"></br></br>
            <button id="submit">Submit</button></br></br>
        </form>
        ` 
    let button = document.querySelector("#submit");
    let name = document.querySelector("#name");
    let shortDescription = document.querySelector("#sDescription");
    let description = document.querySelector("#description");
    const file = document.querySelector("input[type=file]");
    var base64String = "";
    function Uploaded() {
        var file = document.querySelector("input[type=file]")["files"][0];
        var reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        };
        reader.readAsDataURL(file);
    }

    file.addEventListener("change", () => {
        Uploaded();
    });
    button.addEventListener("click", () => {
        console.log("yes")
        fetch(`https://character-database.becode.xyz/characters/${character.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name : name.value,
                
                shortDescription : shortDescription.value,
                
                description : description.value,

                image : base64String
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        name.value = "";
        shortDescription.value = "";
        description.value = "";
    })
    })

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

























