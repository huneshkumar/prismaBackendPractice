import {Router} from "express"
import { createUSer } from "../Controller/UserController.js"

const router=Router()

router.post("/",createUSer)


export default router