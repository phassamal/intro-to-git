var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there!");
});

app.get("/bye", function(req, res){
   res.send("Goodbye"); 
});

app.get("/dog", function(req, res){
    console.log("someone made a server request");
    res.send("meow");
    });
    
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("welcome to the " + subreddit.toUpperCase() + " SUBREDDIT"); 
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
     console.log(req.params);
     res.send("welcome to comments"); 
})

app.get("*", function(req, res){
   res.send("you are a star"); 
});
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
    });