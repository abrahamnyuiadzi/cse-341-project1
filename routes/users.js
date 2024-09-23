const express= require('express');
const app = express();


const usersController = require('../controllers/users');


router.get('/',  usersController.getAll);

router.get('/:id',usersController.getSingle);


module.exports = router ;

