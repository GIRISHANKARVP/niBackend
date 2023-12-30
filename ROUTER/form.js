const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
let FormSchema =require("../add"); 

router.post('/form', (req, res) => {
    FormSchema.create(req.body, (error, data) => {
        if (error) {
            res.status(500).json({ error: 'An error occurred' });
        } else {
            console.log(data);
            res.json(data); //fetch data from /form and  will store in db using post()
        }
    });
});
module.exports=router;
