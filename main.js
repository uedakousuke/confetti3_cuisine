const express =require("express")
const homeController =require("./controllers/homeController")
const layouts = require("express-ejs-layouts");
const errorController = require("./controllers/errorController")
app = express();
app.use(express.urlencoded({extended: false})
);
app.use(express.json());
app.use(express.static("public"))
app.set("port",process.env.PORT || 3000);
app.set("view engine","ejs");
app.use(layouts);
app.get("/",(req,res) => {
    req.send("Welcome to Confetti Cuisine")
});
app.get("/courses",homeController.showCourses);
app.get("/contact",homeController.showSignUp);
app.post("/contact",homeController.postedSignUpForm);


app.listen(app.get("port"),() => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);