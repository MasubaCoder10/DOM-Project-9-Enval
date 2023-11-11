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

let names = "";
let email = "";
let biographie = "";

if (!localStorage.getItem("name")) {
  localStorage.setItem("name", names);
}
names = localStorage.getItem("name");

if (!localStorage.getItem("email")) {
  localStorage.setItem("email", email);
}
email = localStorage.getItem("email");

if (!localStorage.getItem("biographie")) {
  localStorage.setItem("biographie", biographie);
}
biographie = localStorage.getItem("biographie");

btnSend1.addEventListener("click", () => {
  let getObjConnect = JSON.parse(localStorage.getItem("userConnect"));

  if (oldPassword.value === getObjConnect.passWord) {
    if (newPassword.value === confirmationPassword.value) {
      getObjConnect.passWord = newPassword.value;
      let localStorageArray = JSON.parse(localStorage.getItem("arrayLogin"));
      localStorageArray.map((el) => {
        if (el.id === getObjConnect.id) {
          el.passWord = newPassword.value;
        }
      });
      localStorage.setItem("arrayLogin", JSON.stringify(localStorageArray));
      console.log("yoyoyo");
      setTimeout(() =>{
        window.location = "login.html";
      },2000)
      getObjConnect.clear();
      
    }
  } else {
    console.log("erreur");
  }
});

function showLogin() {
  alert4.classList.add("alert-text-show3");
}

const validation = () => {
  if (inputName.value === "") {
    alert("Name, is empty");
    return false;
  }
  if (inputEmail.value === "") {
    alert("Email, is empty");
    return false;
  }
  /*  if(inputBiographie.value === ""){
            alert("Biographie, is empty");
            return false;
        } */

  return true;
};

function apply() {
  if (validation() === true) {
    console.log("yesyesyes");
    names = inputName.value;
    localStorage.setItem("name", names);
    email = inputEmail.value;
    localStorage.setItem("email", email);
    biographie = inputBiographie.value;
    localStorage.setItem("biographie", biographie);

    displayValue();
    btnSend.addEventListener("click", () => {
      alert1.classList.add("alert-text-show");
      setTimeout(() => {
        alert1.classList.remove("alert-text-show");
      }, 3000);
    });
  }
}
function displayValue() {
  inputEmail.value = email;
  inputName.value = names;
  inputBiographie.value = biographie;
}
displayValue();

function showPicture() {
  typeImg = JSON.parse(localStorage.getItem("typeImg"));
if(typeImg){
  navarImg.setAttribute("src", typeImg);
  photo.setAttribute("src", typeImg);
}
  
}
showPicture()


file.addEventListener("change", () => {
  const chooseFile = file.files[0];
lo
  navarImg.src = URL.createObjectURL(chooseFile);
  photo.src = URL.createObjectURL(chooseFile);

  alert3.classList.add("alert-text-show2");
  setTimeout(() => {
    alert3.classList.remove("alert-text-show2");
  }, 2000);

  if (chooseFile) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem("typeImg", JSON.stringify(reader.result));
    });
    showPicture()
    reader.readAsDataURL(chooseFile);
  }
});



function deleteUserCount(){
    console.log("sosos");
    let localStorageArray = JSON.parse(localStorage.getItem("arrayLogin"));
    let getObjConnect = JSON.parse(localStorage.getItem("userConnect"));
    localStorageArray = localStorageArray.filter((el) =>{
        if(el.id !== getObjConnect.id){
            return el;
        }
    })
    localStorage.setItem("arrayLogin", JSON.stringify(localStorageArray));
    photo.setAttribute("src", "./img/avatar.jpg");
    navarImg.setAttribute("src", "./img/avatar.jpg");

    alert2.classList.add("alert-text-show1");
    setTimeout(() => {
      alert2.classList.remove("alert-text-show1");
    }, 2000);
    setTimeout(()=>{
        window.location.href = "login.html";
    },4000);
}