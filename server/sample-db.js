const Product = require("./model/product")

// サンプルデータ用
class SampleDb{
  constructor(){
    this.products =[
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        img:'../../assets/image/iMacimg.png',
        detail_img:'../../assets/image/iMac.png',
        heading1:'sample text1',
        heading2:'sample text2',
        heading3:'sample text3',
      },
      {
        name: 'iPhone 12 Pro',
        price: 699,
        description: 'A great phone with one of the best cameras',
        img:'../../assets/image/appstore.png',
        detail_img:'../../assets/image/iPhone12.png',
        heading1:'sample text1',
        heading2:'sample text2',
        heading3:'sample text3',
        heading_text1:'sampletexttext1',
        heading_text2:'sampletexttext2',
        heading_text3:'sampletexttext3',
    
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: '',
        img:'../../assets/image/appstore.png',
        detail_img:'../../assets/image/iPhone12.png',
        heading1:'sample text1',
        heading2:'sample text2',
        heading3:'sample text3',
        heading_text1:'sampletexttext1',
        heading_text2:'sampletexttext2',
        heading_text3:'sampletexttext3',
      },
      {
        name: 'i Mac - pink',
        price: 1100,
        description: 'A great PC with one of the best cameras',
        img:'../../assets/image/appstore.png',
        detail_img:'../../assets/image/iMac.png',
        heading1:'sample text1',
        heading2:'sample text2',
        heading3:'sample text3',
        heading_text1:'sampletexttext1',
        heading_text2:'sampletexttext2',
        heading_text3:'sampletexttext3',
      },
    ]
  }

  async initDb(){
    // cleanDbがちゃんと終了してから次の処理
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb(){
    await Product.deleteMany({})
  }

  pushProductsToDb(){
    this.products.forEach(
      (product)=>{
        // modelで用意したProduct型のインスタンスをproductsのproduct数分作る
        const newProduct = new Product(product)
        // で、保存
        newProduct.save()
      }
    )
  }
  seeDb(){
    this.pushProductsToDb()
  }
}
module.exports = SampleDb