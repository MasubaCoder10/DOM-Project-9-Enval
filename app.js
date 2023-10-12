// variable
const inputText = document.querySelector("#input-text"),
  inputPassword = document.querySelector("#input-password"),
  btnLogin = document.querySelector(".submit-btn"),
  table1 = document.querySelector(".alert-text"),
  table2 = document.querySelector(".alert-text1"),
  table3 = document.querySelector(".alert-text2"),
  timer = document.querySelector("#timer"),
  headers = document.querySelectorAll("#header"),
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

let index = 0;
let second = 5 * 60;

function time(second) {
  let sec = 0;
  let min = 0;
  let hrs = 0;
  hrs = Math.floor(second / 3600);
  min = Math.floor((second / 60) % 60);
  sec = Math.floor(second % 60);
  timer.innerHTML = `${hrs < 10 ? "0" : ""}${hrs}:${
    min < 10 ? "0" : ""
  }${min}: ${sec < 10 ? "0" : ""}${sec}`;
}

function timerDown() {
  let x = setInterval(() => {
    time(second);
    second--;
    if (second <= 0) {
      clearInterval(x);
    }
  }, 1000);
}
timerDown()
/* let newPwd = localStorage.getItem('newPwd')
let userName = "Masuba",
passWord= "123456";
localStorage.setItem("password", passWord);
let getpassword = JSON.parse(localStorage.getItem("password"));
btnLogin.addEventListener('click', ()=>{
  if(newPwd){
    if(inputText.value === userName  && inputPassword.value === newPwd){
      window.location.href = 'dashboard.html';
  }
  
}else{
  if(inputText.value === userName  && inputPassword.value === getpassword ){
    window.location.href = 'dashboard.html';
  } else{
    console.log('incorect');
  }
}
})
 */




let localStorageArray = JSON.parse(localStorage.getItem("arrayLogin"))
let userConnect = JSON.parse(localStorage.getItem("userConnect"))


function login() {
  index++;
 
  localStorageArray.forEach((item, index) => {
    if (
      item.userName === inputText.value &&
      item.passWord === inputPassword.value.toString()
    ) {

      let objLogin = {
        id: item.id,
        userName: item.userName,
        passWord: item.passWord
      }
      localStorage.setItem("userConnect", JSON.stringify(objLogin));

      window.location.href = "dashboard.html";
      
      /* window.location = */
      index = 0;
    } else {
      table1.classList.add("alert-text-show");
      setTimeout(() => {
        table1.classList.remove("alert-text-show");
      }, 2000);
    }

    if (index === 3) {
      const question = prompt("Question secrete: quel est votre surnom");
      if (question == "oui") {
        window.location.href = "dashboard.html";
        index = 0;
      } else {
        count();

        setTimeout(() => {
          table3.classList.add("alert-text-show2");
          setTimeout(() => {
            table3.classList.remove("alert-text-show2");
          }, 5 * 60 * 1000);
        }, 3000);
      }

      index = 0;
      return;
    }
  });
}

function count() {
  table2.classList.add("alert-text-show1");

  setTimeout(() => {
    table2.classList.remove("alert-text-show1");
  }, 2000);

  inputText.disabled = true;
  inputPassword.disabled = true;
  btnLogin.disabled = true;
}











