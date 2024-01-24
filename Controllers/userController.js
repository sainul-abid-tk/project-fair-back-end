const users=require('../Models/userModel')

exports.register=async(req,res)=>{
    const {username,email,password}=req.body
    try {
        // check email already exist
        const existingUser = await users.findOne({ email })
        console.log(existingUser);
        if (existingUser) {
            res.status(406).json('User already exist!!! Please Login...')
        } else {
            const newUser = users({
                username,email,password,profile:'',github:'',linkedin:''
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch (err) {
        res.status(401).json(err)
    }
}