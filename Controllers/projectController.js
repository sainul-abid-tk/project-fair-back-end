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
// Edit project
exports.editProjects=async (req,res)=>{
    const {title,languages,overview,github,website,projectImage}=req.body
    const uploadImage=req.file?req.file.filename:projectImage
    const userId=req.payload
    const {pid}=req.params
    console.log(pid);
    try{
        const updateProject=await projects.findByIdAndUpdate({_id:pid},{
            title,languages,overview,github,website,projectImage:uploadImage,userId
        },{new:true})
        await updateProject.save()
        res.status(200).json(updateProject)
    }catch(err){
        res.status(401).json(err)
    }
}
// delete project
exports.removeProjects=async(req,res)=>{
    const {pid}=req.params
    try{
        const deleteProject=await projects.findByIdAndDelete({_id:pid})
        res.status(200).json(deleteProject)

    }catch(err){
        res.status(401).json(err)
    }
}