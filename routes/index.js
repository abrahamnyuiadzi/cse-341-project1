const router = require('express').Router();

//router.get('/', (req,res)=>{res.send('hello word')});

router.use('/users', require('./users.js'));

module.exports = router ;

