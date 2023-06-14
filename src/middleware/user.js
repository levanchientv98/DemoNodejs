function validate(req, res, next ){

    const{ username, password } = req.body;

    if( username.length > 20){
        next("Username is not validate");
    }
    else if(password.length > 8){
        next("Password is not validate");
    }
    else if( !username){
        next("User name is required");
    } 
    else if(!password){
        next("Password is required");
    }
    next();
    res.send({
            username,
            password,
    });
}

module.exports = {
    validate
}