import express from 'express';
import 'dotenv/config';
import db from './config/db.js';
import permissionRouter from './routes/permissions.route.js';

const {PORT} = process.env;

const app = express();
app.use(express.json());

app.use('/permission', permissionRouter);

async function startServer() {
    try {
        await db.authenticate();
        console.log("DB Online");

        await db.sync();
        console.log("DB Sincronizada")
    } catch (error) {
        console.log("Unexpected data base error", error);
    }

    app.listen(PORT, () => {
        console.log("Server running in port", PORT);
    });
}

startServer();