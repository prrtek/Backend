import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { upload } from "../middlewares/multer.middleware";
const router = Router();

const uploadImages = upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "coverImage", maxCount: 1 },
]);
router.post("/", uploadImages, registerUser);
//router.route("/").get(registerUser);

export default router;
