import {Router} from "express"
import { createUSer,updateUser } from "../Controller/UserController.js"

const router=Router()

router.post("/create",createUSer)
router.put("/update/:id",updateUser)



export default router