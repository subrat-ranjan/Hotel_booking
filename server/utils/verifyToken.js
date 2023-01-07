import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifytoken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated!"))
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid"));
        //then if every thing is ok
        req.user = user;
        //req.youcan assign anything here= user(our information);
        next();
    });
    //it includes .. const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.jwt);
};

export const verifyUser = (req, res, next) => {
    verifytoken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "you are not authorized"))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifytoken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "you are not authorized"))
        }
    })
}