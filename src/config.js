import {config} from 'dotenv';

config();

export const HTTP_PORT = process.env.HTTP_PORT || 5000
export const HTTP_HOST = process.env.HTTP_HOST || 'localhost'
export const HTTP_USER = process.env.HTTP_USER || 'root'
export const HTTP_PASS = process.env.HTTP_PASS || ''
export const HTTP_DB = process.env.HTTP_DB || 'web'
export const DB_PORT = process.env.DB_PORT || 3306