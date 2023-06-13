const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');

router.get('/get-all-uers',userControllers.getAllUsers);

// find user by id
router.get('/getUser/:userId', userControllers.getUserById);

//create user
router.post('/createUser', userControllers.createUser);

//create many user
// router.post('/createManyUsers');


// find user by name and age
router.get('/getUserByNameAndAge', userControllers.getUserByNameAndAge);
module.exports = router;

// v1/user/:id
// => user = id

// v1/user?userAge=10&compare=eq&age=30
//  =>userAge > 30
// if(compare == eq){
    // get user co tuoi = 30
// }