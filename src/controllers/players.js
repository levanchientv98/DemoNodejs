
// get all players
function getAllPlayers(req, res) {
    res.send( [
        {name:"Vayne", attack: 29, health: 3, status: "alive"},
        {name: "Chau Son Master Yi", attack: 20, health: 4, status: "alive"},
        {name: "Hoang Long Yasuo", attack: 50, health: 2, status: "death"},
        {name: "Riven", attack: 48, health: 2, status: "death"},
        {name: "Volibear", attack: 99, health: 99, status: "alive"},
    ]);
};

// get player by name
function getPlayerbyName(req,res){
    const queryObject=req.query;
    console.log("queryObject: ",queryObject);
    console.log("Name: ", queryObject.name);
    res.send({
        name: queryObject.name, 
    })
}

// Post (create) player
function createPlayer(req,res){
    const{ name, attack,health} = req.body;
    players.push({
        name, 
        attack,
        health,
        status: health > 0 ? 'alive' : 'death' 
    })
        res.json(players);

}

module.exports = {
    getAllPlayers,
    getPlayerbyName,
    createPlayer
}