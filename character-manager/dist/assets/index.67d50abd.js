const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}};L();const D="https://character-database.becode.xyz/characters",q={method:"GET"},w=document.querySelector(".dashboard"),E=document.querySelector("main"),k=document.querySelector(".container");let M=t=>`
            <h2>${t.name}</h2>
            <img src = "data:image/png;base64,${t.image}">
            <h3>${t.shortDescription}</h3>
            <a id="a-${t.id}" class="a-dashboard" href="#">Learn More</a>
        `,B=t=>{w.remove();let n=document.createElement("section");n.classList.add("character-editor"),n.innerHTML=`
        <div class="description_fiche">
            <h2>${t.name}</h2>
            <img src = "data:image/png;base64,${t.image}">
            <h3>${t.shortDescription}</h3>
            <p>${t.description}</p>
        </div>   
        <div id="button-MD">
            <button id="button-modify" type="button"></button>
            <button id="button-delete" type="button"></button>   
        </div> 
    `,E.appendChild(n),document.querySelector("#button-delete").addEventListener("click",()=>{confirm("Are you sure ?")==!0&&(fetch(`https://character-database.becode.xyz/characters/${t.id}`,{method:"DELETE"}),n.innerHTML=`
            <p class="deleted_c">The character has been deleted !</p>
            `)}),document.querySelector("#button-modify").addEventListener("click",()=>{document.querySelector(".character-editor").remove();const e=document.createElement("section");E.appendChild(e),e.classList.add("character-creation"),e.innerHTML=`
        <div id="formCreation">
            <h1>Modify the character !</h1></br>
            <label for="name">Name :</label>
            <input type="text" id="name" class= "textField" name="name"></br>
            <label for="sDescription">Short Description :</label>
            <textarea id="sDescription" class= "textField"></textarea></br>
            <label for="description">Description :</label>
            <textarea id="description" class= "textField"></textarea></br>
            <label for= "image">Image :</label>
            <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png"></br>
            <button id="submit">Submit</button></br>
        </div>
        `;let a=document.querySelector("#submit"),c=document.querySelector("#name"),s=document.querySelector("#sDescription"),l=document.querySelector("#description");const i=document.querySelector("input[type=file]");var f="";function b(){var h=document.querySelector("input[type=file]").files[0],p=new FileReader;p.onload=function(){f=p.result.replace("data:","").replace(/^.+,/,"")},p.readAsDataURL(h)}i.addEventListener("change",()=>{b()}),a.addEventListener("click",()=>{console.log("yes"),fetch(`https://character-database.becode.xyz/characters/${t.id}`,{method:"PUT",body:JSON.stringify({name:c.value,shortDescription:s.value,description:l.value,image:f}),headers:{"Content-type":"application/json; charset=UTF-8"}}),c.value="",s.value="",l.value="";const h=document.querySelector(".character-creation"),p=document.createElement("p");p.classList.add("modify_c"),p.textContent="The character has been changed !",h.appendChild(p)})})};fetch(D,q).then(t=>t.json()).then(t=>{for(let n=0;n<t.length;n++){let o=t[n],d=document.createElement("section");d.id="card-"+o.id,d.innerHTML=M(o),k.appendChild(d),document.querySelector(`#a-${o.id}`).addEventListener("click",e=>{e.preventDefault(),B(o)})}});const T=document.querySelector(".ajouter"),C=document.querySelector("main");T.addEventListener("click",()=>{const t=document.createElement("section");C.appendChild(t),t.classList.add("character-creation"),document.querySelector(".dashboard").remove(),C.appendChild(t),t.classList.add("character-creation"),t.innerHTML=`
    <div id="formCreation">
        <h1>Create the character !</h1></br>
        <label for="name">Name :</label>
        <input type="text" id="name" class= "textField" name="name"></br>
        <label for="sDescription">Short Description :</label>
        <textarea id="sDescription" class= "textField"></textarea></br>
        <label for="description">Description :</label>
        <textarea id="description" class= "textField"></textarea></br>
        <label for= "image">Image :</label>
        <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png"></br>
        <button id="submit">Submit</button></br>
    </div>
    `;var o=document.querySelector("#submit"),d=document.querySelector("#name"),r=document.querySelector("#sDescription"),e=document.querySelector("#description");const a=document.querySelector("input[type=file]");var c="";function s(){var l=document.querySelector("input[type=file]").files[0],i=new FileReader;i.onload=function(){c=i.result.replace("data:","").replace(/^.+,/,"")},i.readAsDataURL(l)}a.addEventListener("change",()=>{s()}),o.addEventListener("click",()=>{console.log("yes"),fetch("https://character-database.becode.xyz/characters",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:d.value,shortDescription:r.value,description:e.value,image:c})}),d.value="",r.value="",e.value="";const l=document.querySelector(".character-creation"),i=document.createElement("p");i.classList.add("modify_c"),i.textContent="The character has been created !",l.appendChild(i)})});const U=document.querySelector("#search");let F="https://character-database.becode.xyz/characters";const $={method:"GET"},S=document.querySelector("main");let H=t=>`
            <h2>${t.name}</h2>
            <img src = "data:image/png;base64,${t.image}">
            <h3>${t.shortDescription}</h3>
            <a id="a-${t.id}" class="a-dashboard" href="#">More informations</a>
        `,j=t=>{document.querySelector(".container").remove();let o=document.createElement("section");o.classList.add("character-editor"),o.innerHTML=`
        <div class="description_fiche">
            <h2>${t.name}</h2>
            <img src = "data:image/png;base64,${t.image}">
            <h3>${t.shortDescription}</h3>
            <p>${t.description}</p>
        </div>   
        <div id="button-MD">
            <button id="button-modify" type="button"></button>
            <button id="button-delete" type="button"></button>   
        </div>
    `,S.appendChild(o),document.querySelector("#button-delete").addEventListener("click",()=>{confirm("Are you sure ?")==!0&&(fetch(`https://character-database.becode.xyz/characters/${t.id}`,{method:"DELETE"}),o.innerHTML=`
            <p class="deleted_c">The character has been deleted !</p>
            `)}),document.querySelector("#button-modify").addEventListener("click",()=>{document.querySelector(".character-editor").remove();const a=document.createElement("section");S.appendChild(a),a.classList.add("character-creation"),a.innerHTML=`
        <div id="formCreation">
            <h1>Modify the character !</h1></br>
            <label for="name">Name :</label>
            <input type="text" id="name" class= "textField" name="name"></br>
            <label for="sDescription">Short Description :</label>
            <textarea id="sDescription" class= "textField"></textarea></br>
            <label for="description">Description :</label>
            <textarea id="description" class= "textField"></textarea></br>
            <label for= "image">Image :</label>
            <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png"></br>
            <button id="submit">Submit</button></br>
        </div>
      `;let c=document.querySelector("#submit"),s=document.querySelector("#name"),l=document.querySelector("#sDescription"),i=document.querySelector("#description");const f=document.querySelector("input[type=file]");var b="";function h(){var p=document.querySelector("input[type=file]").files[0],m=new FileReader;m.onload=function(){b=m.result.replace("data:","").replace(/^.+,/,"")},m.readAsDataURL(p)}f.addEventListener("change",()=>{h()}),c.addEventListener("click",()=>{console.log("yes"),fetch(`https://character-database.becode.xyz/characters/${t.id}`,{method:"PUT",body:JSON.stringify({name:s.value,shortDescription:l.value,description:i.value,image:b}),headers:{"Content-type":"application/json; charset=UTF-8"}}),s.value="",l.value="",i.value="";const p=document.querySelector(".character-creation"),m=document.createElement("p");m.classList.add("modify_c"),m.textContent="The character has been changed !",p.appendChild(m)})})};U.addEventListener("input",t=>{let n=t.target.value;console.log(n),fetch(F,$).then(o=>o.json()).then(o=>{for(let d=0;d<o.length;d++)if(o[d].name===n){let r=o[d];document.querySelector(".dashboard").remove();let a=document.createElement("div");a.classList.add("container"),S.appendChild(a);let c=document.createElement("section");c.id="card-"+r.id,c.innerHTML=H(r),a.appendChild(c),document.querySelector(`#a-${r.id}`).addEventListener("click",l=>{l.preventDefault(),j(r)})}})});let z="https://character-database.becode.xyz/characters";const Y={method:"GET"},v=document.querySelector("main"),N=document.querySelector("h1");N.addEventListener("click",()=>{document.querySelector(".character-editor").remove(),console.log("yes");const n=document.createElement("section");n.classList.add("dashboard"),v.appendChild(n);const o=document.createElement("div");o.classList.add("container"),n.appendChild(o),fetch(z,Y).then(e=>e.json()).then(e=>{for(let a=0;a<e.length;a++){let c=e[a],s=document.createElement("section");s.id="card-"+c.id,s.innerHTML=d(c),o.appendChild(s),document.querySelector(`#a-${c.id}`).addEventListener("click",i=>{i.preventDefault(),r(c)})}});let d=e=>`
                <h2>${e.name}</h2>
                <img src = "data:image/png;base64,${e.image}">
                <h3>${e.shortDescription}</h3>
                <a id="a-${e.id}" class="a-dashboard" href="#">Learn More</a>
            `,r=e=>{n.remove();let a=document.createElement("section");a.classList.add("character-editor"),a.innerHTML=`
            <div class="description_fiche">
                <h2>${e.name}</h2>
                <img src = "data:image/png;base64,${e.image}">
                <h3>${e.shortDescription}</h3>
                <p>${e.description}</p>
            </div>   
            <div id="button-MD">
                <button id="button-modify" type="button"></button>
                <button id="button-delete" type="button"></button>   
            </div> 
        `,v.appendChild(a),document.querySelector("#button-delete").addEventListener("click",()=>{confirm("Are you sure ?")==!0&&(fetch(`https://character-database.becode.xyz/characters/${e.id}`,{method:"DELETE"}),a.innerHTML=`
                <p class="deleted_c">The character has been deleted !</p>
                `)}),document.querySelector("#button-modify").addEventListener("click",()=>{document.querySelector(".character-editor").remove();const i=document.createElement("section");v.appendChild(i),i.classList.add("character-creation"),i.innerHTML=`
            <div id="formCreation">
                <h1>Modify the character !</h1></br>
                <label for="name">Name :</label>
                <input type="text" id="name" class= "textField" name="name"></br>
                <label for="sDescription">Short Description :</label>
                <textarea id="sDescription" class= "textField"></textarea></br>
                <label for="description">Description :</label>
                <textarea id="description" class= "textField"></textarea></br>
                <label for= "image">Image :</label>
                <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png"></br>
                <button id="submit">Submit</button></br>
            </div>
            `;let f=document.querySelector("#submit"),b=document.querySelector("#name"),h=document.querySelector("#sDescription"),p=document.querySelector("#description");const m=document.querySelector("input[type=file]");var y="";function g(){var x=document.querySelector("input[type=file]").files[0],u=new FileReader;u.onload=function(){y=u.result.replace("data:","").replace(/^.+,/,"")},u.readAsDataURL(x)}m.addEventListener("change",()=>{g()}),f.addEventListener("click",()=>{console.log("yes"),fetch(`https://character-database.becode.xyz/characters/${e.id}`,{method:"PUT",body:JSON.stringify({name:b.value,shortDescription:h.value,description:p.value,image:y}),headers:{"Content-type":"application/json; charset=UTF-8"}}),b.value="",h.value="",p.value="";const x=document.querySelector(".character-creation"),u=document.createElement("p");u.classList.add("modify_c"),u.textContent="The character has been changed !",x.appendChild(u)})})}});let R="https://character-database.becode.xyz/characters";const I={method:"GET"},A=document.querySelector("main"),J=document.querySelector("h1");J.addEventListener("click",()=>{document.querySelector(".character-creation").remove(),console.log("yes");const n=document.createElement("section");n.classList.add("dashboard"),A.appendChild(n);const o=document.createElement("div");o.classList.add("container"),n.appendChild(o),fetch(R,I).then(e=>e.json()).then(e=>{for(let a=0;a<e.length;a++){let c=e[a],s=document.createElement("section");s.id="card-"+c.id,s.innerHTML=d(c),o.appendChild(s),document.querySelector(`#a-${c.id}`).addEventListener("click",i=>{i.preventDefault(),r(c)})}});let d=e=>`
                <h2>${e.name}</h2>
                <img src = "data:image/png;base64,${e.image}">
                <h3>${e.shortDescription}</h3>
                <a id="a-${e.id}" class="a-dashboard" href="#">Learn More</a>
            `,r=e=>{n.remove();let a=document.createElement("section");a.classList.add("character-editor"),a.innerHTML=`
            <div class="description_fiche">
                <h2>${e.name}</h2>
                <img src = "data:image/png;base64,${e.image}">
                <h3>${e.shortDescription}</h3>
                <p>${e.description}</p>
            </div>   
            <div id="button-MD">
                <button id="button-modify" type="button"></button>
                <button id="button-delete" type="button"></button>   
            </div> 
        `,A.appendChild(a),document.querySelector("#button-delete").addEventListener("click",()=>{confirm("Are you sure ?")==!0&&(fetch(`https://character-database.becode.xyz/characters/${e.id}`,{method:"DELETE"}),a.innerHTML=`
                <p class="deleted_c">The character has been deleted !</p>
                `)}),document.querySelector("#button-modify").addEventListener("click",()=>{document.querySelector(".character-editor").remove();const i=document.createElement("section");A.appendChild(i),i.classList.add("character-creation"),i.innerHTML=`
            <div id="formCreation">
                <h1>Modify the character !</h1></br>
                <label for="name">Name :</label>
                <input type="text" id="name" class= "textField" name="name"></br>
                <label for="sDescription">Short Description :</label>
                <textarea id="sDescription" class= "textField"></textarea></br>
                <label for="description">Description :</label>
                <textarea id="description" class= "textField"></textarea></br>
                <label for= "image">Image :</label>
                <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png"></br>
                <button id="submit">Submit</button></br>
            </div>
            `;let f=document.querySelector("#submit"),b=document.querySelector("#name"),h=document.querySelector("#sDescription"),p=document.querySelector("#description");const m=document.querySelector("input[type=file]");var y="";function g(){var x=document.querySelector("input[type=file]").files[0],u=new FileReader;u.onload=function(){y=u.result.replace("data:","").replace(/^.+,/,"")},u.readAsDataURL(x)}m.addEventListener("change",()=>{g()}),f.addEventListener("click",()=>{console.log("yes"),fetch(`https://character-database.becode.xyz/characters/${e.id}`,{method:"PUT",body:JSON.stringify({name:b.value,shortDescription:h.value,description:p.value,image:y}),headers:{"Content-type":"application/json; charset=UTF-8"}}),b.value="",h.value="",p.value="";const x=document.querySelector(".character-creation"),u=document.createElement("p");u.classList.add("modify_c"),u.textContent="The character has been changed !",x.appendChild(u)})})}});
