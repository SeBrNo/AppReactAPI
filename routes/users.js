import {Router} from "express";
import {deleteTest, getTest, postTest, updateTest, getTestId, updateTest2} from "../controllers/users.js";
const router = Router();

router.get("/users", getTest);
router.get("/users/:id", getTestId);//puede ser otra cosa en id
router.post("/users", postTest);
router.put("/users/:id", updateTest);//put actualiza toda la unidad
router.patch("/users/:id", updateTest2);
router.delete("/users/:id", deleteTest);

export default router;
