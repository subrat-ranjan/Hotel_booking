import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
// import cors from "cors";

const app = express();
dotenv.config()

const connect = async () => {

    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDb")
    } catch (error) {
        console.log(error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
})
// mongoose.connection.on("connected", () => {
//     console.log("mongoDB connected!");
// })

// app.get("/users", (req, res) => {
//     res.send("hello");
// })


//...MIDDLEEARES...
// app.use(cors);
app.use(cookieParser());


app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


//...error handler...

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

app.listen(process.env.PORT, () => {
    connect()
    console.log("Connected to beckend!")
})
