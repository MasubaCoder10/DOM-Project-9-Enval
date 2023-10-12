const file = document.querySelector("#input-file"),
photo = document.querySelector("#photo"),
navarImg = document.querySelector("#navar-img"),
btnDelete = document.querySelector("#btn-delete"),
inputName = document.querySelector("#input-name"),
inputEmail = document.querySelector("#input-email"),
inputBiographie = document.querySelector("textarea"),
btnSend = document.querySelector(".btn-send"),
alert1 = document.querySelector(".alert-text"),
alert2 = document.querySelector(".alert-text1"),
alert3 = document.querySelector(".alert-text2"),
alert4 = document.querySelector(".alert-text3"),
btnUpdateProfil = document.querySelector("#btn-updateProfil"),
btnDeleteProfil = document.querySelector("#btn-deleteProfil"),
oldPassword = document.querySelector("#old-password"),
newPassword = document.querySelector("#new-password"),
confirmationPassword = document.querySelector("#confirmation-password"),
btnSend1 = document.querySelector("#btnSend");


/* let getPwd = localStorage.getItem('password');
let newPwd = localStorage.getItem('newPwd')

btnSend1.addEventListener('click', ()=>{

    if(!newPwd && oldPassword.value === getPwd){
       if(newPassword.value === confirmationPassword.value){
           localStorage.setItem('newPwd', newPassword.value)
       }else{
        console.log("new and old don't match");
       }
    }else if(newPwd && oldPassword.value === newPwd){
        if(newPassword.value === confirmationPassword.value){
            localStorage.setItem('newPwd', newPassword.value)
        }else{
         console.log("new and old don't match");
        }
    }

})
 */






btnSend1.addEventListener('click', ()=>{
    let getObjConnect = JSON.parse(localStorage.getItem("userConnect"));

    if(oldPassword.value === getObjConnect.passWord){
        console.log("yes");
        if(newPassword.value === confirmationPassword.value){
            getObjConnect.passWord = newPassword.value;
            let localStorageArray = JSON.parse(localStorage.getItem("arrayLogin"))
            localStorageArray.map((el) =>{
                if(el.id === getObjConnect.id){
                    el.passWord = newPassword.value;
                }
            })
            localStorage.setItem("arrayLogin", JSON.stringify(localStorageArray))
            getObjConnect.clear()  
            
        }
    }else{
        console.log("erreur");
    }
})





function showLogin(){
    alert4.classList.add("alert-text-show3")
}



const validation = () =>{
    
        if(inputName.value === ""){
            alert("Name, is empty");
            return false;
        }
        if(inputEmail.value === ""){
            alert("Email, is empty");
            return false;
        }
       /*  if(inputBiographie.value === ""){
            alert("Biographie, is empty");
            return false;
        } */
        
    return true;

}

function apply(){
    if(validation() === true){
        btnSend.addEventListener("click", ()=>{
            alert1.classList.add("alert-text-show")
            setTimeout(()=>{
                alert1.classList.remove("alert-text-show")
            },2000)
            console.log("yesyes");
            inputEmail.value = "";
            inputName.value ="";
            inputBiographie.value = ""
        });
    } 
    
}


function showPicture(){

    
        typeImg = JSON.parse(localStorage.getItem("typeImg"));
    
        
        
            navarImg.setAttribute("src", typeImg)
            photo.setAttribute("src", typeImg)
            
            
        
    
}
showPicture()


    file.addEventListener("change", ()=> {  
  
        const chooseFile = file.files[0];
        
        navarImg.src = URL.createObjectURL(chooseFile)
        photo.src = URL.createObjectURL(chooseFile);
        
        alert3.classList.add("alert-text-show2")
            setTimeout(()=>{
                alert3.classList.remove("alert-text-show2")
            },2000);

        if(chooseFile){
            
            const reader = new FileReader()
            reader.addEventListener("load", ()=>{ 
                    localStorage.setItem("typeImg", JSON.stringify(reader.result))
                    
            });
            
            reader.readAsDataURL(chooseFile);
            
        }
        
    })




function deleteBtn(){
    btnDelete.addEventListener("click", ()=>{
       
        localStorage.clear();
        photo.setAttribute("src", "./img/avatar.jpg");
        navarImg.setAttribute("src", "./img/avatar.jpg")

        alert2.classList.add("alert-text-show1");
        setTimeout(()=>{
            alert2.classList.remove("alert-text-show1")
        }, 2000)
    })
}
deleteBtn()