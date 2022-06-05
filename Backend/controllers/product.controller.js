const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');




router.get('/', async (req,res)=>{

    
    try {
        const product = await Product.find();
        res.json(product);
    }catch(err) {
        res.send(err);
    }
})

router.delete('/:id',async (req,res)=>{
    const id = req.params.id;
    const del = await Product.deleteOne({_id:id});
    res.send(del);
})

router.post('/', async (req,res)=>{
    console.log(req.body);
    let product = new Product({
        productName: req.body.productName,
        productShortCode: req.body.productShortCode,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        isBestAcheived: req.body.isBestAcheived,
        origin: req.body.origin
    })
    
    try{
        const savedProduct = await product.save();
        console.log(savedProduct);
        res.send(savedProduct);
    }catch(err){
        res.send(err);
    }
})


module.exports = router;