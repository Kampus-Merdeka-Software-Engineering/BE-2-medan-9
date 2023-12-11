import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config();

// Koneksi ke database menggunakan Sequelize
const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
});

export default db;