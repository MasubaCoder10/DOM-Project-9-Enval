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

let index = 0;

if (!localStorage.getItem("timerDown")) {
  localStorage.setItem("timerDown", 300);
}
let second = localStorage.getItem("timerDown");
var min = parseInt(second / 60);
var sec = parseInt(second % 60);

function countDownTimer() {
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  timer.innerHTML = min + ":" + sec;

  if (second <= 0) {
    localStorage.clear("timerDown");
    location.reload()
  } else {
    second = second - 1;

    min = parseInt(second / 60);
    sec = parseInt(second % 60);
    localStorage.setItem("timerDown", second);
    setTimeout("countDownTimer()", 1000);
  }
}

let localStorageArray = JSON.parse(localStorage.getItem("arrayLogin"));
let userConnect = JSON.parse(localStorage.getItem("userConnect"));

function login() {
  index++;

  localStorageArray.forEach((item) => {
    if (
      item.userName === inputText.value &&
      item.passWord === inputPassword.value.toString()
    ) {
      let objLogin = {
        id: item.id,
        userName: item.userName,
        passWord: item.passWord,
      };
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
        let checked = true;
        localStorage.setItem("cheked", JSON.stringify(checked));
        timers();
      }

      index = 0;
      return;
    }
  });
}

function timers() {
  let getChecked = JSON.parse(localStorage.getItem("cheked"));
  if (getChecked) {
    setTimeout(() => {
      table3.classList.add("alert-text-show2");
      countDownTimer();
      setTimeout(() => {
        table3.classList.remove("alert-text-show2");
      }, 5 * 60 * 1000);
    }, 1000);
    inputText.disabled = true;
    inputPassword.disabled = true;
    btnLogin.disabled = true;
  }
  
}
timers();

function count() {
  table2.classList.add("alert-text-show1");

  setTimeout(() => {
    table2.classList.remove("alert-text-show1");
  }, 2000);

  inputText.disabled = true;
  inputPassword.disabled = true;
  btnLogin.disabled = true;
}
