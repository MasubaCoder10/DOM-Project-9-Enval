let userConect = JSON.parse(localStorage.getItem("userConnect")) 


if(window.location.pathname === "/commande.html" || window.location.pathname === "/facture.html" || 
window.location.pathname === "/count.html" || window.location.pathname === "/dashboard.html" || window.location.pathname === "/servcli.html" 
|| window.location.pathname === "/suiv.html" || window.location.pathname === "/suivideteal.html"){
    console.log("yes");
    if(!userConect){
        window.location.href = "login.html";
        }
}