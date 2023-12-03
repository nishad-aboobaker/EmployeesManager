import { Router } from "express";
import * as controller from "./Controller.js";
const router=Router();
router.route("/addEmployee").post(controller.addEmployee);
router.route("/viewEmployee").get(controller.viewEmployee);
router.route("/deleteEmployee/:id").delete(controller.deleteEmployee);
export default router;