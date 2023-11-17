import {createPool} from "mysql2/promise";
import {HTTP_HOST,HTTP_USER,HTTP_PASS,DB_PORT,HTTP_DB} from '../config.js'
export const pool = createPool({
    host: HTTP_HOST,
    user: HTTP_USER,
    password: HTTP_PASS,
    port: DB_PORT,
    database: HTTP_DB,
});
