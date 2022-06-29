const aCreation = document.querySelector("#a-character-creation");
const dashboard = document.querySelector("#dashboard")
const main = document.querySelector("main")
const url = "https://character-database.becode.xyz/characters";


aCreation.addEventListener("click", () => {
    dashboard.remove();
    const section = document.createElement("section");
    main.appendChild(section);
    section.classList.add("character-creaction");
    section.innerHTML = `
    <form>
        <label for="name"></label>Name :<br>
        <input type="text" id="name" name="name"><br><br>
        <label for="sdescription">Short Description :</label><br>
        <input type="text" id="sdescription" name="sdescription"><br><br>
        <label for="description">Description :</label><br>
        <input type="text" id="description" name="description"><br><br>
        <label for="image"></label>Image :<br>
        <input type="image" id="image" name="image"><br><br>
        <input type="submit" value="Submit">
    </form>
    `   
    let form = document.querySelector("form");
    let name = document.querySelector("#name");
    let shortDescription = document.querySelector("#sdescription");
    let description = document.querySelector("#description");
    let image = document.querySelector("#image");
    form.addEventListener("submit", () => {
        fetch(url, {
            method: 'POST',
            body: {
                "name" : `${name}`,
            
                "shortDescription" : `${shortDescription}`,
            
                "description" : `${description}`,

                "image" : `${image}`
            }
        });
    })
})