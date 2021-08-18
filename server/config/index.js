// 本番環境商用環境のデータベース切り替え
if(process.env.NODE_ENV === 'production'){
  module.exports = require('./prod')
}else{
  module.exports = require('./dev')
}