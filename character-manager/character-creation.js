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
        <textarea id="sDescription" type="text"></textarea><br><br>
        <label for="description">Description :</label><br>
        <textarea id="description"></textarea><br><br>
        <label for="image"></label>Image :<br>
        <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png"><br><br>
        <button id="submit">Submit</button>
    </form>
    `   
    let button = document.querySelector("#submit");
    let name = document.querySelector("#name");
    let shortDescription = document.querySelector("#sdescription");
    let description = document.querySelector("#description");
    const file = document.querySelector("input[type=file]");
    var base64String = "";
    function Uploaded() {
        var file = document.querySelector("input[type=file]")["files"][0];
        var reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            imageBase64Stringsep = base64String;
        };
        reader.readAsDataURL(file);
    }

    file.addEventListener("change", () => {
        Uploaded();
    });
    button.addEventListener("click", () => {
        try {
            fetch("https://character-database.becode.xyz/characters", {
                method: 'POST',
                body : JSON.stringify({
                    name : name.value,
                
                    shortDescription : shortDescription.value,
                
                    description : description.value,

                    image : base64String
                })
            });
        } catch(err) {
            console.error(err);
        }
    })
})
