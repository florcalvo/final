
import { Router } from "express";
export const router = Router();
import { isAuth } from './auth'

import { booksCt } from "../src/books/booksCt";

router.get("/tienda", BookCt.getAll);
router.get ("/:id", booksCt.getById);
router.post ("/",  isAuth, uploadFile.single(""), booksCt.addOne);
router.delete ("/:id", isAuth, booksCt.deleteOne);
router.patch ("/:id", isAuth, booksCt.updateOne);

