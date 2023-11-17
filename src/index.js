import {HTTP_PORT} from "./config.js";
import app from "./app.js";

app.listen(HTTP_PORT, () => {
    console.log(`Server iniciado en puerto ${HTTP_PORT}`);
});
