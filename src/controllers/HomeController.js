module.exports={
    index:function(req, res, next){
        res.rendeer('logeado', {
            isAuthenticated : req.isAuthenticated(),
            user: req.user
        });
    }
}