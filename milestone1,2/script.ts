const toggleButton = document.getElementById("toogle-skills") as HTMLButtonElement
const skills = document.getElementById("skills-section") as HTMLElement

toggleButton.addEventListener('click', ()=>{
    if(skills.style.display === "none"){
        skills.style.display = "block"
    } else {
        skills.style.display = "none"
    }
})