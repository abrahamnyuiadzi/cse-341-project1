const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll =async(req,res)=>{
    const result =await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((contacts)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(contacts);


    });
  

}

const getSingle =async(req,res)=>{
    const userId = new ObjectId(req.params.id);
    const result =await mongodb.getDatabase().db().collection('users').find({_id:userId});
    result.toArray().then((contacts)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(contacts[0]);
     });
    
}
const createUser =async (req,res)=>{
    //swagger.tags=['users']
    const user ={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        favoriteColor:req.body.favoriteColor,
        birthday:req.body.birthday,
    };
    const reponse =await mongodb.getDatabase().db().collection('user').insertOne(user);
   if(reponse.acknowledged>0){
    res.status(204).send();
   }else{
    res.status(500).json(response.error||'some error occured while updating the user ');
    
   }

};

const updateUser =async (req,res)=>{
       //swagger.tags=['users']

    const userId = new ObjectId(req.params.id);
    const user ={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        favoriteColor:req.body.favoriteColor,
        birthday:req.body.birthday,
    };
    const reponse =await mongodb.getDatabase().db().collection('user').replaceOne({ _id :userId},user);
   if(reponse.modifiedCount>0){
    res.status(204).send();
   }else{
    res.status(500).json(reponse.error||'some error occured while updating the user ');
    
   }

};

const deleteUser =async (req,res)=>{
       //swagger.tags=['users']
    const userId = new ObjectId(req.params.id);
    const user ={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        favoriteColor:req.body.favoriteColor,
        birthday:req.body.birthday,
    };
    const reponse =await mongodb.getDatabase().db().collection('user').deleteOne({ _id :userId});
   if(reponse.deletedCount>0){
    res.status(204).send();
   }else{
    res.status(500).json(reponse.error||'some error occured while updating the user ');
    
   }

};





module.exports={
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
 
}