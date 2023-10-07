const file = document.querySelector("#input-file"),
photo = document.querySelector("#photo"),
navarImg = document.querySelector("#navar-img"),
btnDelete = document.querySelector("#btn-delete");



file.addEventListener("change", ()=> {  
    const chooseFile = file.files[0];
    let name = chooseFile.name
    if(chooseFile){
        
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{ 
                localStorage.setItem("typeImg", JSON.stringify(reader.result))
            
        });
         
        reader.readAsDataURL(chooseFile);
    }
    
})
function showPicture(){
    document.addEventListener("DOMContentLoaded", ()=>{
        let typeImg = JSON.parse(localStorage.getItem("typeImg"));
        if(typeImg){
            navarImg.setAttribute("src", typeImg)
            photo.setAttribute("src", typeImg)
            
        }
        
     })
}
showPicture();

function deleteBtn(){
    btnDelete.addEventListener("click", ()=>{
        localStorage.clear()
        location.reload()
    })
}
deleteBtn()