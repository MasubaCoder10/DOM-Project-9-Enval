
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
  

 

 

