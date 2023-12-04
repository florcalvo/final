import { Router } from "express";
import { BookCt } from "./booksCt.js";

export const searchRouter = Router();

searchRouter.get("/", BookCt.searchByTitle);

