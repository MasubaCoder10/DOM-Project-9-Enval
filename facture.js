
const arrayFacture = [
  {
      id: "00001",
      name: "Enval",
      date: "10/03/2023",
  },
  {
      id: "00002",
      name: "Biochimie",
      date: "11/03/2023",
  },
  {
      id: "00003",
      name: "Biologie",
      date: "12/03/2023",
  },
  {
      id: "00004",
      name: "Biologie",
      date: "12/03/2023",
  },
  {
      id: "00005",
      name: "Enval",
      date: "12/03/2023",
  },
  {
      id: "00006",
      name: "Biochimie",
      date: "12/03/2023",
  },
  {
      id: "00007",
      name: "Enval",
      date: "13/03/2023",
  },
  {
      id: "00008",
      name: "Geologie",
      date: "13/03/2023",
  },
  {
      id: "00009",
      name: "Enval",
      date: "13/03/2023",
  }
  
]
const tbody = document.querySelector("#tbody-facture");
const search = document.querySelector("#search");
const navarImg = document.querySelector("#navar-img");

console.log(tbody);

function showPicture(){
  document.addEventListener("DOMContentLoaded", ()=>{
      let typeImg = JSON.parse(localStorage.getItem("typeImg"));
      if(typeImg){
        navarImg.setAttribute("src", typeImg)
      }
      
   })
}
showPicture()
//$$$$$$$$$$$$$$$$$$$ facture &&&&&&&&&&&&&&

function addData(array) {
    tbody.innerHTML = "";
    array.forEach((el) => {
      tbody.innerHTML += `
        <tr class="tr" id="rows">
            <td class="table td soso" style="text-align: center; padding-left: 40px; ">${el.id}</td>
            <td class="table td"   >${el.name}</td>
            <td class="table td" >${el.date}</td>
            <td class="voir td"  > <button class="button">voir</button> </td>
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
  