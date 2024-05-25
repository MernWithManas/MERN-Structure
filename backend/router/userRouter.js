import { Router } from "express";
import { signUpUser } from "../controller/user.controller";




Router.route("/signup").post(signUpUser)