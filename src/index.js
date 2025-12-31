import dotenv from "dotenv";
dotenv.config(); // 👈 sabse upar

import mongoose from "mongoose";
import connectDB from "./db/index.js";

connectDB();

