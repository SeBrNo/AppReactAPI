import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

app.use(usersRoutes);

app.use((req, res, next) => {
    res.status(404).json({message: "Endpoint not found"});
});

export default app;