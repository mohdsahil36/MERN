const mongoose= require('mongoose');
const DataTable=require('../model/tb_product_datas-model');
var express=require('express');
const { ObjectId } = require('mongodb');

// module.exports = router;
console.log("Values from model:",DataTable);

// finding the data in the collection
exports.getDataValues = (req,res) =>{
    DataTable.find()
        .then((values)=>{
            // console.log(values);
            res.send(values);
        })
        .catch((err)=>{
            res.send({
                message:
                    err.message || "Error occured while fetching database values",
            });
        })
}

//finding product specific data in the db collection
exports.getProductData = (req,res) =>{ 

    var parameter=req.params.item_id;
    parameter=parameter.trim();
    console.log("Before:",typeof(parameter));
    const convert = new ObjectId(parameter);
    console.log("Type of:",typeof(convert)); 
    
    DataTable.find({_id:parameter})
        .then((find)=>{
            console.log("The values sorted are:",find);
            res.send(find);
        })
        .catch(error => {
            console.error(error); // Handle any errors
          });
}