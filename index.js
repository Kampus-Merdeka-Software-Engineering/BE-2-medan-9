// index.js (or your main server file)
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // Import cookie-parser
import dotenv from "dotenv";
import db from "./configs/Database.js";
dotenv.config()

// Router
import RouteAuth from './routers/RouteAuth.js';
import Routereservation from './routers/RouteReservation.js'

const app = express()
const port = process.env.DB_PORT || 5001;

try {
    await db.authenticate();
    console.log("Database connected....");

    db.sync({alter:true})

} catch (error) {
    console.log(error);
}

app.use(cors());

app.use(express.json());

// Use cookie-parser middleware
app.use(cookieParser());

app.options('/logout', cors()); // Handle preflight for /auth/logout
app.use('/auth', RouteAuth);
app.use('/', Routereservation);

app.listen(port, () => console.log("Server running at port 5001...."));
