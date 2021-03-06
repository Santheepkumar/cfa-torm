import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "../server/index.route";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/api/v1", indexRoutes);

export default app;
