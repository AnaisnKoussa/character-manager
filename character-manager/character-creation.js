const aCreation = document.querySelector("#a-character-creation");
const dashboard = document.querySelector("#dashboard")
const main = document.querySelector("main")


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
})