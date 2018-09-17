var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "post 1", author: "susy"},
        {title: "my adorable pet bunny", author: "Charlie"},
        {title: "can you believe this pomsky", author: "Colt"}
        ];
    res.render("posts", {posts: posts})
})

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening");
});
