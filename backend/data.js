import bcrypt from "bcryptjs";

const  data = {
    users : [{
        name : "Emir",
        email : "emirtaskin123@gmail.com",
        password : bcrypt.hashSync("1234",8),
        isAdmin : true
    },{
        name : "Taner",
        email : "tanerclk123@gmail.com",
        password : bcrypt.hashSync("12345",8),
        isAdmin : false
    },{
        name : "Muhammet",
        email : "muhammetali357@gmail.com",
        password : bcrypt.hashSync("test",8),
        isAdmin : false
    }

],
   players :  [{
    id : 1,
    username : "lumixus",
    level : 41,
    str : 65,
    def : 62,
    profile_img : "test.png"

},
{
    id : 2,
    username : "bloodheath",
    level : 34,
    str : 53,
    def : 26,
    profile_img : "test2.png"

},
{
    id : 3,
    username : "cutterMan",
    level : 24,
    str : 33,
    def : 14,
    profile_img : "test3.png"
 

}



],
products : [
    {
    name : "RTX 3090 PC",
    price : 25000,
    img : "p1.png",
    stock : 15,
    description : "Best PC ever !"

},  {
    name : "RTX 3060 PC",
    price : 17000,
    img : "p2.png",
    stock : 15,
    description : "Best priced PC ever !"

},  {
    name : "IPHONE 12",
    price : 32999,
    img : "p3.png",
    stock : 57,
    description : "Best phone ever !"

}

]


};



export default data;