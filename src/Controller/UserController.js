import prisma from "../Db/db.config.js";


export const createUSer= async (req,res)=>{
    const {
        first_name,last_name,email,password
    }=req.body

    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(findUser){
        return res.json({status:400,message:"email already taken"})
    }

    const newUser= await prisma.user.create({
        data:{
            first_name:first_name,email:email,last_name:last_name,password:password
        }
    })

    return res.json({status:200,message:"user added"})
}