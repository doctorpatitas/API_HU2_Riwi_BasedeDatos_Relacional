import express from 'express';
import 'dotenv/config';

const {PORT} = process.env;

const app = express();
app.use(express.json());

async function startServer() {
    app.listen(PORT, () => {
        console.log("Server running in port", PORT);
    });
}

startServer();