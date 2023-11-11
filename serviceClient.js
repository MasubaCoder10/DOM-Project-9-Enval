navarImg = document.querySelector("#navar-img");
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