var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermoine Green"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding, go to potions"
// })

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delecious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Hermoine Green"}, function(err, user){
    if(err){
        // console.log(err);
    } else {
        user.posts.push({
            title: "3 things I really hate",
            content: "voldemort, voldemot"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});