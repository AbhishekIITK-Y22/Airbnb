const User =require("../models/user.js");

module.exports.renderSignUpForm =(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signup=async(req,res)=>{
    try{
    let {username,password,email} = req.body;
   const newUser= new User({email,username});
   const registeredUser =await User.register(newUser,password);
   console.log(registeredUser);
   req.login(registeredUser,(err)=>{
    if(err){
        return next(err);
    }
    else {
        req.flash("success","Welcome to Wanderlust");
        res.redirect("/listings");
    }
   })
   
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
  
  }
module.exports.login=async(req,res)=>{
   
    req.flash("success","Welcome to WanderLust! You are logged in!")
    console.log(res.locals.redirectUrl);
    if(res.locals.redirectUrl){
    res.redirect(res.locals.redirectUrl);
    }
    else{
        res.redirect("/listings");
    }
    
    
    }

module.exports.logout=(req,res,next)=>{
    req.logout(function(err){
        if(err){
            return next(err);
        }
        req.flash("success","Logged out successfully");
        res.redirect("/listings");
    })
}