import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifytoken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//because of register function there is no need of create user route.


// router.get("/checkauthentication", verifytoken, (req, res, next) => {
//     res.send("hello user you are logged in.")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user you are logged in and you can delete your account.")
// })

// router.get("/checkadmin/:id", verifAdmin, (req, res, next) => {
//     res.send("hello Admin you are logged in and you can delete all  accounts.")
// })



//...UPDATE...
router.put("/:id", verifyUser, updateUser);
//...DELETE... 
router.delete("/:id", verifyUser, deleteUser);
//...GET...
router.get("/:id", verifyUser, getUser);
//...GET ALL...
router.get("/", verifyAdmin, getUsers);

export default router;