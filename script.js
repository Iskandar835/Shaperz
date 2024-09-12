const modale = document.querySelector(".modale");

    
function clearModale () {
    const parent = document.querySelector(".injection-content");
    parent.innerHTML = "";
};


function openModale() {
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


function closingModale() {
    const closingCross = document.getElementById("closing-cross");
    const modaleBG = document.querySelector(".modale__background");
    
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


function modaleFirstPage() {
    const parent = document.querySelector(".injection-content");
    
    const text = document.createElement("p");
    text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate ipsum, accusantium quae blanditiis a numquam dolorum, esse, ducimus quasi illum assumenda eveniet? Amet, a error. At impedit nam facere praesentium maiores magni quibusdam voluptatibus suscipit veniam, rem nesciunt iste, ratione cupiditate laborum sed. Dolorem eos hic facilis itaque cupiditate.";
    
    const cover = document.createElement("img");
    cover.src = "./images/shaping-room.jpg";
    cover.alt = "Picture of shapping room";
    
    parent.appendChild(text);
    parent.appendChild(cover);
};


function modaleSecondPage() {
    const parent = document.querySelector(".injection-content");
    
    const cover = document.createElement("img");
    cover.src = "./images/glassing-room.jpg";
    cover.alt = "Picture of glassing room";
    parent.appendChild(cover)
    
    const form = document.createElement("form");
    const label = document.createElement("label");
    label.for = "name";
    label.innerText = "Prenom";
    const input = document.createElement("input");
    input.type = "text";
    input.name = "name";
    input.id = "name";
    
    const label2 = document.createElement("label");
    label2.for = "lastname";
    label2.innerText = "Nom";
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.name = "lastname";
    input2.id = "lastname";
    
    const label3 = document.createElement("label");
    label3.for = "email";
    label3.innerText = "Email";
    const input3 = document.createElement("input");
    input3.type = "email";
    input3.name = "email";
    input3.id = "email";
    
    const button = document.createElement("button");
    button.classList.add("btn", "btn__form");
    button.innerText = "envoyer";
    
    const elements = [label, input, label2, input2, label3, input3, button]
    elements.forEach(element => {
        form.appendChild(element)
    });
    parent.appendChild(form);
};


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