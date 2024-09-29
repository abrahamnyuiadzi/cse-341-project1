const router = require('express').Router();

router.use('/' , require('./swagger'))

router.get('/', (req,res)=>{
    //swagger.tags=[hello word]
    res.send('hello word')
});

router.use('/users', require('./users.js'));

module.exports = router ;

