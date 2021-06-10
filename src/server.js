import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

const app = express();
const PORT = 3001;

app.set("view engine" ,"pug");
app.use(helmet());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname,"/assets")));
app.get("/", (req, res) =>{
    res.render("login");
});

app.get("/result", (req,res) => {
    const id = req.query.id;
    const pass = req.query.pass;

    if (pass === "1010") {
        res.render("result", {recieveData : id });
    } else {
        res.render("login", {recieveData : "비밀번호가 올바르지 않습니다."});
    }
});

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START!!`)
}) 
