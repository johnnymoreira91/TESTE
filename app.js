const app = require('./server/server');
const path = require('path');
require('dotenv').config()


app.listen(80, () =>{
    console.log('server running on port: ', 80)
})