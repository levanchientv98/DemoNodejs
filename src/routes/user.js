const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');
const userMiddleware = require('../middleware/user');

router.get('/users',userControllers.getAllUsers);

// find user by id
router.get('/users/:userId', userControllers.getUserById);

//create user
router.post('/create-user', userControllers.createUser);

// check username & password
router.post('/validate-user', userMiddleware.validate);


// find user by name and age
router.get('/user-by-name-and-age', userControllers.getUserByNameAndAge);
module.exports = router;

// v1/user/:id
// => user = id

// v1/user?userAge=10&compare=eq&age=30
//  =>userAge > 30
// if(compare == eq){
    // get user co tuoi = 30
// }