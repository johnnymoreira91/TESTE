const express = require('express');
const route = express.Router();
const apiUser = require('../controllers/userController');

route.get('/admin',express.json(), apiUser.adminEntrance);
route.get('/',express.json(), apiUser.userGet);
route.post('/',express.json(), apiUser.userPost);
route.put('/edit/:id', apiUser.putUser);
route.delete('/delete/:id', apiUser.userDel);

route.get('/register',express.json(), apiUser.userRegister);
route.post('/users/register', express.json(), apiUser.userRegisterPoster);

module.exports = route;