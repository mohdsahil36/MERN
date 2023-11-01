const express=require('express');
const cors=require('cors');
const app=express();
const PORT = process.env.PORT || 8000;
// const controller=require('./controller/tb_product_datas-controller');
const fetchrouter= require('./routes/routing');


//running express server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

//adding cors policy requirement between react and node js
app.use(cors({ credentials: true }))

//assigning values of db to plp path for data fetch
app.use('/',fetchrouter);
app.use('/plp',fetchrouter);
app.use('/pdp/:item_id',fetchrouter);