import express from 'express'; 
import userModel from "../database/models/user";
import bodyParser from "body-parser";

const router = express.Router();
const urlencodedparser = bodyParser.urlencoded({ extended: true });

router.get("/", (req, res) => {
  res.redirect("/");
});


router.get("/signup", (req, res) => {
  res.render("signup.ejs", {data: {message: ``}});
});

router.post("/signedup",urlencodedparser, async (req, res) => {
  const responses = req.body;
  const query = await userModel.findOne({ username: responses.username });
  if (!query) {
    const new_user = new userModel({ username: responses.username, password: responses.password, points: 0 });
    await new_user.save(); 
    res.send("Successfully signed up!");
  }
  else {
    res.render("signup.ejs", {data: {message: `Somebody already has the username ${responses.username}`}})
  }
})

export default router;