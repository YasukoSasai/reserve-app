const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const SampleDb = require('./sample-db')


const productRoutes = require('./routes/products')
const path = require('path')

// 最初mangooseDBにつなぐ.then FakeDbのインスタンス作成して参照する
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () =>{
    if(process.env.NODE_ENV !== 'production'){
      const sampleDb = new SampleDb()
      // data初期化させたいとき使う
      // sampleDb.initDb()
    }
  }
)

const app = express()

// このapi叩いたらproductRoutesを読みに行く
app.use('/api/v1/products',productRoutes)

// 本番環境商用環境のデータベース切り替え
if(process.env.NODE_ENV === 'production'){
  const appPath = path.join(__dirname,'..','dist','reserve-app')
  app.use(express.static(appPath))
  //  上記のapiのリクエストに該当しないものだったらdistのindex.htmlを返す
  app.get("*", function(req,res){
  res.sendFile(path.resolve(appPath, 'index.html'))
})
}



const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
  console.log('I am running!!')
})

