const aCreation = document.querySelector(".ajouter");
const dashboard = document.querySelector("#dashboard")
const main = document.querySelector("main")
const url = "https://character-database.becode.xyz/characters";


aCreation.addEventListener("click", () => {
    dashboard.remove();
    aCreation.remove();
    const section = document.createElement("section");
    main.appendChild(section);
    section.classList.add("character-creaction");
    section.innerHTML = `
    <form id="formCreation">
        <h1>Create the character !</h1>
        <label for="name" ></label>
        <input type="text"  class="txtField id="name" name="name" placeholder="name">
        <label for="sdescription"></label>
        <textarea  class="txtField id="sDescription" type="text" placeholder="sDescription"></textarea>
        <label for="description"></label>
        <textarea  class="txtField id="description" placeholder="description"></textarea>
        <label for="image"></label>Image :
        <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png">
        <button id="submit">Submit</button>
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
        fetch("https://character-database.becode.xyz/characters", {
            method: 'POST',
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

