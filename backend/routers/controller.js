const User = require("../models/users")
const fs = require("fs/promises");
module.exports={
    getAllUsers:(req,res)=>{
        User.find({})
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
    },
    getUserDetails:(req,res)=>{
        const id = req.params.id
        User.findById(id)
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
        
    },
    createNewUser:(req,res)=>{
        const user = new User({
            name: req.body.name,
            email:req.body.email,
            image:`/images/${req.file.filename}`
        })
        user.save()
        .then((result)=>{
            console.log(result)
            res.status(200).json({"status":"user created"})
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
         
    },
    getUserByName:(req,res)=>{
        const {name}=req.query
        User.find({name:`${name}`})
        .then((result)=>{
            console.log(result)
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
    },
    updateUser:(req,res)=>{
        let id =req.params.id;
        const user={
            name: req.body.name,
            email:req.body.email,
            image:req.file ? `/images/${req.file.filename}`: req.body.image 
        }
       User.findOneAndUpdate({_id:id},user)
       .then((result)=>{
           if(user.image != result.image) deleteImages(result.image)
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
    },
    deleteUser:(req,res)=>{
        const id = req.params.id;
        User.findOneAndDelete(id)
        .then((result)=>{
            if(result.image) deleteImages(result.image)
        res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
    
    }
}
function deleteImages(image) {
    const current_image = image.split("/images/")[1];
    fs.unlink(`images/${current_image}`).catch((err) => console.error(err));
}