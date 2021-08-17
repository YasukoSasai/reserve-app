const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev');
const SampleDb = require('./sample-db')

// 最初mangooseDBにつなぐ.then FakeDbのインスタンス作成して参照する
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () =>{
    const sampleDb = new SampleDb()
    sampleDb.initDb()
  }
)

const app = express()

app.get('/products', function(req,res){
  res.json({'success':true})
})

const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
  console.log('I am running!!')
})

