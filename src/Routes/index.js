import { Router } from "express";
import UserRoute from "./UserRoutes.js"

const router=Router()

router.use("/api/user",UserRoute)


export default router