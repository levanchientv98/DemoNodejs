const express = require('express');
const app = express();
const port = 3000;
const bookRouter = require('./routes/book');
const productRouter = require('./routes/products')
const userRouter = require('./routes/user')
const playerRouter = require('./routes/players')



app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.get('/',(req,res) =>{res.send('Hello World!')});
app.use('/api/v1/', bookRouter);
app.use('/api/v1/', productRouter);
app.use('/api/v1/', userRouter);
app.use('/api/v1/', playerRouter);
;


app.get('/message/:msg', (req, res) =>{
    let msg = req.params.msg;
    console.log("Message: ",msg);
    res.send('Message is sent...')
})

app.get('/',(request,reponse) => {
    reponse.send('Hello Long vs Son')
})

app.listen(port,() =>
{console.log(`Example app listening on port ${port}`)
});
