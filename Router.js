import { Router } from "express";
import * as controller from "./Controller.js";
const router=Router();
router.route("/addEmployee").post(controller.addEmployee);
export default router;