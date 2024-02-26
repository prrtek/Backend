import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { upload } from "../middlewares/multer.middleware";
import { loginUser, logoutUser } from "../controllers/user.controllers";
import { verifyJWT } from "../middlewares/auth.middleware";
const router = Router();

const uploadImages = upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "coverImage", maxCount: 1 },
]);
router.post("/", uploadImages, registerUser);
//router.route("/").get(registerUser);

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
export default router;
