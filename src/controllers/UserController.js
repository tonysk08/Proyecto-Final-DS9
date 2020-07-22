const controller = {};


controller.getSignUp = (req, res, next) => {
    res.render("registro")
}

controller.postSignUp = (req, res, next) =>{
    console.log(req.body);
    return;
} 
module.exports = controller;