var LocalStrategy = require ('passport-local').Strategy;
var mysql = require('mysql');
var bcrypt = require('bcryptjs');
const { use } = require('passport');

module.exports = function(passport){
    
    passport.serializeUser(function(user, done){
        done(null, user);
    });

    passport.deserializeUser(function(obj, done){
        done(null, obj);
    });

    passport.use(new LocalStrategy({
        passReqToCallback:true
    },
        function(req, email, password, done){
            req.getConnection((err,conn)=>{
                conn.query('SELECT * FROM users WHERE email = ?', email, (err, rows, fields) => {
                    if(err){
                        res.json(err);
                    }

                    if (rows.length > 0){
                        var user = rows[0];
                        if(bcrypt.compareSync(password,user.password)){
                            return done(null, {
                                id: user.id,
                                nombre: user.nombre,
                                email:user.email
                            });
                        }
                    }
                    return done (null, false);
                })
            })
        }
        ));
};