const {User}= require("../models/task");



exports.exerciseDataPost = async(req,res)=>{
const {name,description,activityType,duration,date} = req.body
console.log(req.body)
const users= await User.create({
    name,description,activityType,duration,date
})
res.status(200).json({
    sucess:true,
    users
})
}
exports.exerciseDataGet = async(req,res)=>{
    const users = await User.find() 
    res.status(200).json({
        sucess:true,
        users
    })
}
exports.deleteActivity = async(req,res)=>{
    const user = await User.findByIdAndRemove(req.params.id)
    res.status(200).json({
        sucess:true,
        user
    })
   
}