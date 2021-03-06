import express from "express";
import path from "path";
import connect from "./database/connect";
import bodyParser from "body-parser";
import userRouter from "./routes/user"


const app = express();
const PORT = 2000;
app.use(express.static(path.join(__dirname, "public")))
connect("mongodb://localhost:27017/bio-code");
app.use(bodyParser.urlencoded({extended: true}));
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.sendStatus(200); 
})


app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
})