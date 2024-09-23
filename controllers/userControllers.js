const { getUser } = require("../models/userModels")

exports.loginPage = (req,res,next)=>{
    res.render('login')
}

exports.dashboards = (req,res,next)=>{
    res.render('dashboard')

}

exports.loginProcess = (req,res,next)=>{
     //get user data
     const user = getUser(req.body.useremail)
     console.log(req.body)
     if(user !==null && user.password === req.body.userpassword){
        res.render('dashboard')
     }else if(user === null){
        res.render('error',{
            message:'no user exists with this email'
        })
     }else{
        res.render('error',{
            message:'invalid email or password'
        })
     }
}