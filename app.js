// impotation
import { arrayFacture } from "./datas.js";
import { arraySuivi } from "./datas.js";

// variable
const inputText = document.querySelector("#input-text"),
  inputPassword = document.querySelector("#input-password"),
  btnLogin = document.querySelector(".submit-btn"),
  table1 = document.querySelector(".alert-text"),
  table2 = document.querySelector(".alert-text1"),
  table3 = document.querySelector(".alert-text2"),
  timer = document.querySelector("#timer"),
  tbody = document.querySelector("#tbody-facture"),
  headers = document.querySelectorAll("#header"),
  search = document.querySelector("#search")




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
    second--;
    time(second);

    if (second <= 0) {
      clearInterval(x);
    }
  }, 1000);
}

let arrayLogin = [
  {
    id: 1,
    userName: "Masuba",
    passWord: "123456",
  },
  {
    id: 2,
    userName: "MasubaCoder",
    passWord: "111111",
  },
  {
    id: 3,
    userName: "admin",
    passWord: "000000",
  },
];

function login() {
  index++;
  arrayLogin.forEach((item) => {
    if (
      item.userName === inputText.value &&
      item.passWord === inputPassword.value.toString()
    ) {
      location.href = "http://127.0.0.1:5500/dashboard.html";
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
        location.href = "http://127.0.0.1:5500/dashboard.html";
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

//$$$$$$$$$$$$$$$$$$$ facture &&&&&&&&&&&&&&

function addData(array) {
  tbody.innerHTML = "";
  array.forEach((el) => {
    tbody.innerHTML += `
      <tr class="tr" id="rows">
          <td class="table " style="text-align: center; padding-left: 40px;">${el.id}</td>
          <td class="table ">${el.name}</td>
          <td class="table ">${el.date}</td>
          <td class="voir "> <button class="button">voir</button> </td>
      </tr>
      `;
  });
}

addData(arrayFacture);
const rows = document.querySelectorAll("#rows");
// Sort



function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;

  //select tbody and all tr
  const tBody1 = table.tBodies[0];
  console.log(tBody1);
  //create a new array of tr
  const newRows = Array.from(rows);
  console.log(newRows);
  // Sort each row
  const sortedRows = newRows.sort((a, b) => {
    const aColText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody1.firstChild) {
    tBody1.removeChild(tBody1.firstChild);
  }

  // Re-add the newly sorted rows
  tBody1.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll(".table-column")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-column").forEach((headerCell) => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(
      headerCell.parentElement.children,
      headerCell
    );
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");

    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});

//for searching method
//take filter data array 
let newArray = [];


search.addEventListener("keyup", () => {
  let reseach = search.value.toLowerCase();

  newArray = arrayFacture.filter(function (val) {
    if (
      val.id.toLowerCase().includes(reseach) ||
      val.name.toLowerCase().includes(reseach) ||
      val.date.toLowerCase().includes(reseach)
    ) {
      let newObj = { id: val.id, name: val.name, date: val.date };
      return newObj;
    }
  });
  addData(newArray);
  if (newArray == "") {
    document.getElementById("text").innerHTML = `
    <span style="text-align: center;">Aucun Element ne corespond pas à ce nom</span>
    <hr>
    <div style="width:100%; border: 2px solid ##1698a8;"></div>
  `;
  }
});








