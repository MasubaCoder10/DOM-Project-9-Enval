
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
  const getUsers = JSON.parse(localStorage.getItem("arrayLogin"))
  if(!getUsers){
    localStorage.setItem("arrayLogin", JSON.stringify(arrayLogin));
  };
  

 

export const arrayCommande = [
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

export const arraySuivi = [
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