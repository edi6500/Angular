const express = require('express');
const jwt  = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb+srv://zan:1369edriS.@cluster0-nfpyp.mongodb.net/test?retryWrites=true"

mongoose.connect(db, err => {
    if (err) {
        console.log('error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From API route');
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error){
            console.log(error)
        }
        else
        {
            let payload = { subject: registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    });
});

router.post('/login',(req,res) => {
    let userData = req.body

    User.findOne({email:userData.email},(error,user) =>{
        if(error){
            console.log(error)
        } else {
            if(!user){
                res.status(401).send('Invalid email')
            } else if(user.password !== userData.password){
                res.status(401).send('invalid pass')
            }else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token})
            }
        }
    })
})
router.get('/events',(req,res) => {
    let events = [
        {
            "_id":"1",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"2",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"3",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"4",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"5",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"6",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
    ]

    res.json(events)
})

router.get('/special',(req,res) => {
    let events = [
        {
            "_id":"1",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"2",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"3",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"4",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"5",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
        {
            "_id":"6",
            "name":"Auto xpo",
            "description":"Lorem ipsum",
            "data":"2012-04-25"
        },
    ]

    res.json(events)
})
module.exports = router;