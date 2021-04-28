var localConfig = {
  salt : 'jswZlv3jpE',
  jwtSecretKey : 'Yp3s6v9y$B&E)H+MbQeThWmZq4t7w!z%',
  conMongodb: 'mongodb://localhost:27017/photobusiness',
  database: {
    defaultRole: 'user'
  },
  debug: true,
  allowedOrigins: ['http://localhost:4200' , "*"],
}
module.exports = localConfig;