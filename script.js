const closingCross = document.getElementById("closing-cross");
const modale = document.querySelector(".modale");
const button = document.querySelectorAll(".btn__wantMore");


function openModale() {
    button.forEach(btn => {
        btn.addEventListener("click", () => {
            modale.classList.add("modale__active")}) 
        } 
    )
}
       
openModale();

function closingModale() {
    const modaleBG = document.querySelector(".modale__background");

    closingCross.addEventListener("click", () => {
        modale.classList.remove("modale__active")
    });
    modaleBG.addEventListener("click", () => {
        modale.classList.remove("modale__active")
    });

}

closingModale();