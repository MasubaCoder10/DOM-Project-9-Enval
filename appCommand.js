//import
const arrayCommande = [
  {
      id:"00001",
      name:"Enval",
      date:"10/03/2023",
      status: "En cours"
  },
  {
      id:"00002",
      name:"Codeloccol",
      date:"10/03/2023",
      status: "En cours"
  },
  {
      id:"00003",
      name:"ANSI",
      date:"12/03/2023",
      status: "Terminer"
  },
  {
      id:"00004",
      name:"CIPMEN",
      date:"12/03/2023",
      status: "En cours"
  },
  {
      id:"00005",
      name:"ADU",
      date:"13/03/2023",
      status: "Terminer"
  },
  {
      id:"00006",
      name:"Codeloccol",
      date:"14/03/2023",
      status: "En cours"
  },
  {
      id:"00007",
      name:"Enval",
      date:"14/03/2023",
      status: "En cours"
  },
  {
      id:"00008",
      name:"ANSI",
      date:"16/03/2023",
      status: "En cours"
  },
  {
      id:"00009",
      name:"ADU",
      date:"16/03/2023",
      status: "Terminer"
  },
  
];

// variable

const tbodyCommande = document.querySelector("#tbody-command"),
  searchCommande = document.querySelector("#searchCommande"),
  navarImg = document.querySelector("#navar-img");
  



  function showPicture(){
    document.addEventListener("DOMContentLoaded", ()=>{
        let typeImg = JSON.parse(localStorage.getItem("typeImg"));
        if(typeImg){
            navarImg.setAttribute("src", typeImg)
        }
        
     })
}
showPicture()
//************************ */ commande ***********
function addCommand(arrayCommande) {
  tbodyCommande.innerHTML = "";
  arrayCommande.forEach((command) => {
    tbodyCommande.innerHTML += `
                          <tr id="rows" class="tr">
                            <td class="table td soso" style="text-align: start; padding-left: 40px;">${command.id}</td>
                            <td class="table td ">${command.name}</td>
                            <td class="table td ">${command.date}</td>
                            <td class="table td " style="color: red; border-color: black;" >${command.status}</td>
                            <td class="voir td "> <button class="button">voir</button> </td>
                                                    
                          </tr>
          `;
  });
}

addCommand(arrayCommande);
const rows = document.querySelectorAll("#rows");
// search input
// new array
let newArrayCommande = [];

searchCommande.addEventListener("keyup", () => {
  let search = searchCommande.value.toLowerCase();
console.log(search);
console.log(arrayCommande);
  newArrayCommande = arrayCommande.filter(function (val) {
    if (
      val.id.toLowerCase().includes(search) ||
      val.name.toLowerCase().includes(search) ||
      val.date.toLowerCase().includes(search) ||
      val.status.toLowerCase().includes(search)
    ) {
      let obj = {
        id: val.id,
        name: val.name,
        date: val.date,
        status: val.status,
      };
      return obj;
    }
  });
  addCommand(newArrayCommande);
  document.getElementById("text").innerHTML ="";
  if ((newArrayCommande == "")) {
    document.getElementById("text").innerHTML = `
    <span style="text-align: center;">Aucun Element ne corespond pas à ce nom</span>
    <hr>
    <div style="width:100%; border: 2px solid ##1698a8;"></div>
  `;
  }
});

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