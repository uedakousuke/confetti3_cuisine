const express =require("express"),
app = express();
app.use(express.urlencoded({extended: false})
);
app.use(express.json());
app.set("port",process.env.PORT || 3000);

app.get("/",(req,res) => {
    req.send("Welcome to Confetti Cuisine")
});
app.listen(app.get("port"),() => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});