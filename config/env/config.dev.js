var devConfig = {
  conMongodb: 'mongodb://localhost:27017/photobusiness',
  database: {
    defaultRole: 'user'
  },
  debug: true,
  allowedOrigins: ['http://localhost:4200' , "*"],
}
module.exports = devConfig;