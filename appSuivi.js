//import
const arraySuivi = [
  {
      lot: "1E202023001",
      etat: "Reçu",
      date: "12/03/2023",
      rapport: "Disponible"
  },
  {
      lot: "E2202023023",
      etat: "NON Reçu",
      date: "12/03/2023",
      rapport: "NON Disponible"
  },
  {
      lot: "TE202023090",
      etat: "Reçu",
      date: "14/03/2023",
      rapport: "NON Disponible"
  },
  {
      lot: "carbonate",
      etat: "Reçu",
      date: "14/03/2023",
      rapport: "Disponible"
  },
  {
      lot: "Checurire",
      etat: "NON Reçu",
      date: "16/03/2023",
      rapport: "NON Disponible"
  },
  {
      lot: "CO2 libre",
      etat: "Reçu",
      date: "16/03/2023",
      rapport: "Disponible"
  },
  {
      lot: "Conductivite elctricite",
      etat: "NON Reçu",
      date: "16/03/2023",
      rapport: "NON Disponible"
  },
  {
      lot: "PH/temperature",
      etat: "Reçu",
      date: "16/03/2023",
      rapport: "Disponible"
  },
  {
      lot: "Couleur Brute",
      etat: "Reçu",
      date: "18/03/2023",
      rapport: "NON Disponible"
  },
  {
      lot: "Cenuire libre",
      etat: "Reçu",
      date: "20/03/2023",
      rapport: "Disponible"
  },
]

//variable
const tbodySuivi = document.querySelector("#tbodySuivi"),
searchSuivi = document.querySelector("#searchSuivi"),
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
function addSuivi(arraySuivi) {
  tbodySuivi.innerHTML = "";
  arraySuivi.forEach((suivi, index) => {
    tbodySuivi.innerHTML += `
        <tr id="rows" class="tr">
            <td id="nameLot" class="table td soso" style=" text-align: start; padding-left: 40px;">${suivi.lot}</td>
            <td class="table td">${suivi.etat}</td>
            <td class="table td">${suivi.date}</td>
            <td id= "rapport" class="table td">${suivi.rapport}</td>
            <td class="voir td" id="buttons" data-id="${index}"><input class="button" type="button" value="voir" ></td>
            
        </tr>
    `;
  });
}

addSuivi(arraySuivi);
const rows = document.querySelectorAll("#rows");

if(!localStorage.getItem("arraySuivi")){
  localStorage.setItem("arraySuivi", JSON.stringify(arraySuivi));
}

const arrSuivi = JSON.parse(localStorage.getItem("arraySuivi"));
console.log(arrSuivi);

const allButtons = document.querySelectorAll("#buttons");
const nameLot = document.querySelector("#nameLot");
const rapport = document.querySelector("#rapport");

console.log(nameLot.textContent, rapport.textContent);
console.log(allButtons);

allButtons.forEach((button) =>{
  button.addEventListener("click", ()=>{
    console.log(button.dataset.id);
    let index = button.dataset.id;
    if(arrSuivi[index].rapport === "Disponible"){
      let lot = arraySuivi[index].lot;
      localStorage.setItem("lot", JSON.stringify(lot))
      location.href = "suivideteal.html";
    }
    
  })
})

// filter input

// create new array

let newArraySuivi = [];
searchSuivi.addEventListener(("keyup"), ()=>{
  let search = searchSuivi.value.toLowerCase();

  newArraySuivi = arraySuivi.filter(function (val) {
    if(
      val.lot.toLowerCase().includes(search) ||
      val.etat.toLowerCase().includes(search) ||
      val.date.toLowerCase().includes(search) ||
      val.rapport.toLowerCase().includes(search)
    ){
      let obj = {
        lot: val.lot,
        etat: val.etat,
        date: val.date,
        rapport: val.rapport
      }
      return obj
    }

  })
  addSuivi(newArraySuivi);

  if ((newArrayCommande == "")) {
    document.getElementById("text").innerHTML = `
    <span style="text-align: center;">Aucun Element ne corespond pas à ce nom</span>
    <hr>
    <div style="width:100%; border: 2px solid ##1698a8;"></div>
  `;
  }
})


// sort column

function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;

  //select tbody and all tr
  const tBody1 = table.tBodies[0];
 
  //create a new array of tr
  const newRows = Array.from(rows);

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
