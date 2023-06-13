const express = require('express');
const router = express.Router();

router.get('/view-list-products', (req, res)=>{
    res.send( [
        {id: 1, name: 'iPhone9', price: 200000},
        {id: 2, name: 'iPhone10', price: 400000},
        {id: 3, name: 'iPhone11', price: 500000},
        {id: 4, name: 'iPhone12', price: 600000},
        {id: 5, name: 'iPhone13', price: 700000},
    ]);
});

module.exports = router;