let lots = document.querySelector("#lots"),
    lots1 = document.querySelector("#lots1"),
    navarImg = document.querySelector("#navar-img"),
 lot = JSON.parse(localStorage.getItem("lot"))

lots.textContent = lot;
lots1.textContent = lot;

function showPicture(){
    document.addEventListener("DOMContentLoaded", ()=>{
        let typeImg = JSON.parse(localStorage.getItem("typeImg"));
        if(typeImg){
            navarImg.setAttribute("src", typeImg)
            photo.setAttribute("src", typeImg)
        }
        
     })
}
showPicture()