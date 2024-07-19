const express = require('express');
const router=express.Router();
const person=require('./../models/person')




router.post('/',async (req,res)=>{
    try {
        const data=req.body;
        const newPerson=new person(data);
        const response= await newPerson.save();
        
        res.status(200).json(response);


    } 
    catch (err) {
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

// method to get the data of person
router.get('/',async(req,res)=>{
    try {
        const data= await person.find();
        console.log("data fetched");
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

router.get('/:worktype',async(req,res)=>{
    try {
        // extract the work type from url
        const worktype=req.params.worktype;
        if(worktype=='chef'|| worktype=='waiter'|| worktype=='manager'){
            const response= await person.find({work:worktype});
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'invalid work type'})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'internal server error'});
        
    }
})





// updating the data of person

router.put('/:id',async(req,res)=>{
    try {
        const personid=req.params.id; //extract id
        const updatepersondata=req.body;   //update data
        const response=await person.findByIdAndUpdate(personid,updatepersondata,{
            new:true,
            runValidators:true,

        })
        if(!response){
            res.status(404).json({error:'person not found'})
        }
        console.log("data updated");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const personid=req.params.id;
        const response=await person.findByIdAndDelete(personid);
        if(!response){
            res.status(404).json({error:'person not found'})
        }
        console.log("data deleted");
        res.status(200).json({message:"deleted successfully"});

    } catch (err) {
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

module.exports=router;