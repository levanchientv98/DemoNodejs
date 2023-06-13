function getAllUsers(req, res) {
    res.send( [
        {id: 1, name: 'Hoang Long', age: 25, phone: '0971099870', job: 'CEO'},
        {id: 2, name: 'Nguyen Hoang Son', age: 27, phone: '0547784887', job: 'project manager'},
        {id: 3, name: 'Nguyen Hoang Son', age: 27, phone: '0547784887', job: 'project manager'},

    ]);
};
// v1/getUser/userId
function getUserById(req,res){
    const userId =req.params.userId;
    console.log("userID", userId);
    res.send({userId});
}
// v1/getUserByNameAndAge?name=Name&age=20
function getUserByNameAndAge(req,res){
    // const{name, age} =req.query;
    const queryObject=req.query;
    console.log("queryObject: ",queryObject)
    console.log("Name: ", queryObject.name);
    console.log("Age: ", queryObject.age);
    res.send({
        name: queryObject.name, 
        age: queryObject.age
    })
}
// v1/getUserByAge
// function getUserByAge(req,res){
//     const queryObject=req.query;
//     console.log("queryObject: ",queryObject)
//     console.log("Age: ", queryObject.age);
// }

function createUser(req,res){
    const{ username, password, age} = req.body;
    res.send({
        username,
        password,
        age
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByNameAndAge,
    createUser
};