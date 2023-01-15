const bgClr=document.querySelector(".bg-clr")
const btn=document.getElementById("btn")
let color="white"
bgClr.textContent="background color : "+color
btn.addEventListener("click",()=>{
    color="black"
    document.body.style.backgroundColor=color
    bgClr.textContent="background color : "+color
})