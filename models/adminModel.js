const mongoose = require('mongoose')
var crypto = require('crypto');


const adminSchema =  new mongoose.Schema(
    {
        name:{type:String},
        password:{type:String}
        
    }
)



const adminModel = mongoose.model('adminSchema',adminSchema)


  const newUser = new adminModel({
                       name: "yasmin",
                        password: "12345"
                    });
                    newUser.save()
                    .then(user => {})



module.exports=adminModel
