const router = require('express').Router();

//router.get('/', (req,res)=>{res.send('hello word')});

router.use('/contacts', require('./contacts.js'));

module.exports = router ;

