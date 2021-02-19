const Mongoose = require('mongoose');


require('../models/userModel');
const userList = Mongoose.model('userList');

const userController = {

    adminEntrance: (req, res) => {
        userList.find({}).lean().exec(
            function (e, docs) {
                res.render('home', { "userlist": docs });
            }
        )
        //res.render('home')
    },

    ////////////////////////////////////////////////////////////////////////////////////

    userRegister: (req, res) => {

        res.render('register');
    },

    ////////////////////////////////////////////////////////////////////////////////////

    userRegisterPoster: async (req, res) => {
        const addUser = await userList.create(req.body, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: {
                    user: " need at least 3 to 50 Chars",
                    password: " need at least 6 to 100 Chars",
                    name: ' need at least 3 to 100 Chars'
                }
            })
            return res.status(200).json({
                error: false,
                message: "User Added successfully"
            })
        })
    },

    ////////////////////////////////////////////////////////////////////////////////////

    userGet: (req, res) => {
        userList.find({}).then((totalUsers) => {
            return res.json(totalUsers);
        })
    },

    ////////////////////////////////////////////////////////////////////////////////////

    userPost: async (req, res) => {
        console.log(req.body)
        const addUser = await userList.create(req.body, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: {
                    user: " need at least 3 to 50 Chars",
                    password: " need at least 6 to 100 Chars",
                    name: ' need at least 3 to 100 Chars'
                }
            })
            return res.status(200).json({
                error: false,
                message: "User Added successfully"
            })
        })
    },

    ////////////////////////////////////////////////////////////////////////////////////

    userPut: (req, res) => {
       
        userList.updateOne({ _id: req.params.id }, req.body, (erro) => {
            
            if (erro) return res.status(400).json({
                error: true,
                message: "Error, a lista nÃ£o foi editada com sucesso"
            })
            return res.status(200).json({
                error: false,
                message: "Arquivo Editado com sucesso"
            })
        })
    },

    ////////////////////////////////////////////////////////////////////////////////////

    userDel: (req, res) => {
        const del = userList.deleteOne({_id: req.params.id}, (err) =>{
            if(err) return res.status(400).json({
                error: true,
                message: ' Arquivo nÃ£o foi apagado'
            })
            return res.status(200).json({
                error: true,
                message: "Arquivo Apagado com sucesso"
            })
        })
    },

    ////////////////////////////////////////////////////////////////////////////////////

    putUser: (req, res) => {
        const id = req.params.id;
        userList.updateOne({_id: id},req.body, (err) =>{
            if(err) return res.status(400).json({
                error: true,
                message: ' Arquivo nao teve update'
            })
            return res.status(200).json({
                error: true,
                message: "Arquivo update com sucesso"
            })
        })
    },
};

module.exports = userController;