const db = require('../db/baseDatos');

var userController = {
    login: function(req, res) {
        res.render('login');
    },
    
    loginProcess: function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        
        db.query('SELECT * FROM users WHERE email = ?', [email], function(err, results) {
            if (err) {
                console.error('Database error:', err);
                return res.render('login', {error: 'Error en el sistema'});
            }
            
            if (results.length > 0 && results[0].password === password) {
                req.session.userId = results[0].id;
                res.locals.isLoggedIn = true;
                res.locals.user = results[0];
                res.render('profile');
            } else {
                res.render('login', {error: 'Credenciales inválidas'});
            }
        });
    },
    
    register: function(req, res) {
        res.render('register');
    },
    
    registerProcess: function(req, res) {
        var userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            document: req.body.document,
            birthDate: req.body.birthDate
        };
        
        db.query('INSERT INTO users SET ?', userData, function(err) {
            if (err) {
                console.error('Database error:', err);
                return res.render('register', {error: 'Error en el registro'});
            }
            res.render('login', {success: 'Registro exitoso'});
        });
    },
    
    profile: function(req, res) {
        if (!req.session.userId) {
            return res.render('login');
        }
        res.render('profile');
    },
    
    logout: function(req, res) {
        req.session.destroy();
        res.render('login');
    }
};

module.exports = userController;
