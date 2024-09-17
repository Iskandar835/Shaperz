//* This function open the modale *
function openModale() {
    const modale = document.querySelector(".modale");
    const button = document.querySelectorAll(".btn__wantMore");
    
    button.forEach(btn => {
        btn.addEventListener("click", () => {
            modale.classList.add("modale__active");
            modaleFirstPage();
            dotWestTravel();
        }); 
    });
};
openModale();

//* This function close the modale *
function closingModale() {
    const modale = document.querySelector(".modale");
    const modaleBG = document.querySelector(".modale__background");
    const closingCross = document.getElementById("closing-cross");
    
    closingCross.addEventListener("click", () => {
        modale.classList.remove("modale__active");
        clearModale();
    });
    modaleBG.addEventListener("click", () => {
        modale.classList.remove("modale__active");
        clearModale();
    });
};
closingModale();

//* This function clears the modale *
function clearModale () {
    const parent = document.querySelector(".injection-content");
    parent.innerHTML = "";
};

//* This function makes the first page of the modale *
function modaleFirstPage() {
    const arrowleft = document.getElementById("prev");
    arrowleft.style.visibility = "hidden";
    const arrowRight = document.getElementById("next");
    arrowRight.style.visibility = "visible";

    const parent = document.querySelector(".injection-content");
    
    const text = document.createElement("p");
    text.innerText = "Le shaper fabrique des planches de surf de manière artisanale, sculptant le pain de mousse pour créer des modèles uniques, adaptés aux besoins du surfeur et aux vagues. Contacter nous pour concevoir votre planche sur mesure, performante et esthétique.";
    const cover = document.createElement("img");
    cover.src = "./images/shaping-room.jpg";
    cover.alt = "Picture of shapping room";
    
    parent.appendChild(text);
    parent.appendChild(cover);
};

//* This function makes the second page of the modale *
function modaleSecondPage() {
    const arrowleft = document.getElementById("prev");
    arrowleft.style.visibility = "visible";
    const arrowRight = document.getElementById("next");
    arrowRight.style.visibility = "hidden";

    const parent = document.querySelector(".injection-content");
    
    const cover = document.createElement("img");
    cover.src = "./images/glassing-room.jpg";
    cover.alt = "Picture of glassing room";
    parent.appendChild(cover);
    
    const form = document.createElement("form");
    const label = document.createElement("label");
    label.for = "name";
    label.innerText = "Prenom";
    const input = document.createElement("input");
    input.type = "text";
    input.name = "name";
    input.id = "name";
    input.required = true;
    
    const label2 = document.createElement("label");
    label2.for = "lastname";
    label2.innerText = "Nom";
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.name = "lastname";
    input2.id = "lastname";
    input2.required = true;
    
    const label3 = document.createElement("label");
    label3.for = "email";
    label3.innerText = "Email";
    const input3 = document.createElement("input");
    input3.type = "email";
    input3.name = "email";
    input3.id = "email";
    input3.required = true;
    
    const button = document.createElement("button");
    button.classList.add("btn", "btn__form");
    button.innerText = "envoyer";
    
    const elements = [label, input, label2, input2, label3, input3, button]
    elements.forEach(element => {
        form.appendChild(element)
    });
    parent.appendChild(form);
};

//* The dotTravel functions allow the spine to adapt according to the page * 
function dotEstTravel() {
    const firstDot = document.getElementById("first");
    const secondDot = document.getElementById("second");

    firstDot.classList.remove("dot__selected");
    secondDot.classList.add("dot__selected");
};

    
function dotWestTravel() {
    const firstDot = document.getElementById("first");
    const secondDot = document.getElementById("second");

    secondDot.classList.remove("dot__selected");
    firstDot.classList.add("dot__selected");
};

//* This function displays the modale and makes it dynamic *
function displayAllmodale () {
    const arrowright = document.getElementById("next");
    const arrowleft = document.getElementById("prev");
    
    arrowright.addEventListener("click" , () => {
        clearModale();
        dotEstTravel();
        modaleSecondPage();        
    });
    
    arrowleft.addEventListener("click", () => {
        clearModale();
        dotWestTravel();
        modaleFirstPage();
    });
};
displayAllmodale ();