const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs");
app.set("tampilan","./tampilan");

app.get("/home",(req,res)=>{
   res.render("home",{title: "welcome to my app" });
});

app.post("/home",(req,res)=>{
   res.render("home",{title: "welcome to my app" });
});

app.get("/biodata",(req,res)=>{
   res.render("biodata",{title: "welcome to my app" });
});

app.get("/kontak",(req,res)=>{
   res.render("kontak",{title: "welcome to my app" });
});

app.post("/login",(req,res)=>{
   res.render("login",{title: "welcome to my app" });
});

app.get("/login",(req,res)=>{
   res.render("login",{title: "welcome to my app" });
});

app.get("/register",(req,res)=>{
   res.render("register",{title: "welcome to my app" });
});

//code upload foto
app.use(express.static("public"));
//close   

app.listen(3000, () => {
   console.log('server listening on port 3000');
});
