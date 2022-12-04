const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const { default:mongoose } = require("mongoose");
const bodyParser = require('body-parser');
const { Console } = require("console");
const path = require("path");
const static_path = path.join(__dirname, "public");
const router = express.Router();
const app = express();
const User = require("./veridata.js");
const url = "mongodb+srv://kadir:jrDomNjs7Dwh1mYb@cluster0.p5li6xw.mongodb.net/?retryWrites=true&w=majority";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const  http = require("http");
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);

app.use(express.static('public'))

app.use(express.static(static_path));

app.use(express.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

app.use(express.json());

app.set("view engine",'ejs');

app.listen(process.env.PORT || 31, () => {
});


app.get('/',(req,res)=> {
    res.redirect("index");
})

app.get('/add',(req,res)=> {
    res.render('add',{title:"Hoşgeldin"})

})

app.get('/404',(req,res)=> {
    res.status(404).render('404',{title:" 404"});
})
    test();
async function test() {
  try {
    console.log("bağlanıyor");
    await mongoose.connect(url)
    console.log("bağlandı")
  }
  catch (error) {
    console.log("error")

  }
}

app.get('/index', async(req, res) => {
  try {
    const userss = await User.find();
    res.render('index',{title:userss}
  )

  } catch (e) {
      res.render('index',{title:"failed"})
  }
});

app.post('/add2', async(req, res) => {
const user = new User({
  film : req.body.text1,
  replik : req.body.text2,
  ekleyen : req.body.text3,
  kalp : 0
})
try {
  const result = await user.save()
  res.redirect('index');
} catch (error) {
  console.log("error");
  res.redirect('index');
}
});

app.post("/index", async(req, res) => {
 res.json([{
         name_recieved: req.body.name,
         designation_recieved: req.body.designation
            }]);
            const users2 = await User.find();
            var kalb = users2[req.body.name].replik;
            var kalb2 = users2[req.body.name].kalp;
            kalb2++
                        console.log(kalb2);

            const user3 = await User.updateOne(
              {
                replik:kalb,
              },
              { $set:{ kalp:kalb2}}    )

})
