import {login,signup,getdata} from "../Controllers/usercontroller.js";
import { Hono } from "hono";
const userrouter = new Hono();
userrouter.use("/login", login);
userrouter.use("/signup", signup);
userrouter.get("/",getdata);
export { userrouter,getdata };
