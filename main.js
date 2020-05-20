const express =require("express")
const homeController =require("./controllers/homeController")
const layouts = require("express-ejs-layouts")
const errorController = require("./controllers/errorController")
const mongoose = require("mongoose");
const subscribersController = require("./controllers/subscribersController");
mongoose.connect( 
    //データベース接続を設定する
    "mongodb://localhost:27017/confetti3_cuisine",
    {useNewUrlParser:true}
);
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
//すべての購読者を表示するビューへの経路を追加
app.get("/subscriber",subscribersController.getAllSubscribers);
app.get("/courses",homeController.showCourses);
//Contactページを表示するビューへの経路を追加
app.get("/contact",subscribersController.getSubscriptionPage);
app.post("/contact",subscribersController.saveSubscriber);


app.listen(app.get("port"),() => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);
mongoose.Promise = global.Promise