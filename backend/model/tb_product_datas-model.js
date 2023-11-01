const mongoose=require('mongoose');

//Connecting to mongodb database
const mongoDBURL='mongodb+srv://MohdSahil:abcd@cluster0.pd6ymn5.mongodb.net/db_ecomm?retryWrites=true&w=majority';
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB database connection established successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });


//create a schema (this is the collection type and values defined types)
var dataSchema=new mongoose.Schema({
    name:String,
    desc:String,
    price:String,
    type:String,
    url:String
});



//this is a model (we are creating a collection inside the database)
const DataTable=mongoose.model('tb_product_data',dataSchema);
// console.log("Values",DataTable);


module.exports=DataTable;