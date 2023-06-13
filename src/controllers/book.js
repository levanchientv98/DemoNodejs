
function getAllBooks(req, res) {
    res.send( [
        {name: 'Tieng chim hot trong bui man gai', price: 200000},
        {name: 'Chiec thuyen ngoai xa', price: 15000}
    ]);
};

module.exports = {
    getAllBooks
};