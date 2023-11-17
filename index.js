import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(usersRoutes);

app.use((req, res, next) => {
    res.status(404).json({message: "Endpoint not found"});
});

app.listen(PORT, () => {
    console.log("Server iniciado en puerto 5000");
});
