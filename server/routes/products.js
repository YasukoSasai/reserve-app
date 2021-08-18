const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res){
  // apiのURLのendに引数何も渡さないとき
  Product.find({},function(err, foundProducts){
    res.json(foundProducts)
  })
})

router.get('/:productId', function(req, res){
  const productId = req.params.productId
  // apiURLのエンドにproductIdをつけたとき
  Product.findById(productId,function(err, foundProduct){
    // マッチするproductIdが見つからなくてerrになったとき
    if(err){
      // 422番はUnprocessable Entity(リクエストは適切ですが意味が誤っている)
      return res.status(422).send({errors:[{title: 'Product error', detail: 'Product not found!'}]})
    }
    return res.json(foundProduct)
  })
})

module.exports = router