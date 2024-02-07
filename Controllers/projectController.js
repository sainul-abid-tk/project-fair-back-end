const projects=require('../Models/projectModel')

// add project
exports.addProjects=async(req,res)=>{
    console.log("inside Add projet API");
    const {title,languages,overview,github,website}=req.body
    const projectImage=req.file.filename
    const userId=req.payload
    try{
        const existingProject=await projects.findOne({github})
        if(existingProject){
            res.status(406).json("Project already exist in our collection!!! please upload another")
        }
        else{
            const newProject=new projects({
                title,languages,overview,github,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
     res.status(401).json(err)
    }
}

// get Home page Projects
exports.getHomeProjects=async (req,res)=>{
    try{
        const allProjects = await projects.find().limit(3)
        res.status(200).json(allProjects)
    }catch(err){
        res.status(401).json(err)
    }
}
// get all projects
exports.getAllProjects=async (req,res)=>{
    try{
        const allProjects = await projects.find()
        res.status(200).json(allProjects)
    }catch(err){
        res.status(401).json(err)
    }
}
// get user projects
exports.getUserProjects=async (req,res)=>{
    const userId=req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(err)
    }
}