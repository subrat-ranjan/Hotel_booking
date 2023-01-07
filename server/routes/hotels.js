import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
// import { createError } from "../utils/error.js";

const router = express.Router();

//...CREATE...
router.post("/", verifyAdmin, createHotel);

//...UPDATE...
router.put("/:id", verifyAdmin, updateHotel)
//...DELETE...
router.delete("/:id", verifyAdmin, deleteHotel)
//...GET...
router.get("/:id", getHotel)
//...GET ALL...
router.get("/", getHotels)




// const failed = true;

// if (failed) return next(createError(401, "You are not authenticated! "));





export default router;