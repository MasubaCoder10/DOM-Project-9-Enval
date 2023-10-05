let lots = document.querySelector("#lots"),
    lots1 = document.querySelector("#lots1");

let lot = JSON.parse(localStorage.getItem("lot"))

lots.textContent = lot;
lots1.textContent = lot;