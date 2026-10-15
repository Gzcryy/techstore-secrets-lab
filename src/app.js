
require("dotenv").config();

const express = require("express");
const { getDatabaseConfig } = require("./config");

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.json({
        service: "TechStore API",
        status: "running"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.get("/config-check", (req, res) => {
    try {
        const database = getDatabaseConfig();

        res.json({
            configurationLoaded: true,
            databaseConfigured: Boolean(database.host && database.database),
            credentialsConfigured: Boolean(database.username && database.password)
        });
    } catch (error) {
        res.status(503).json({
            configurationLoaded: false,
            error: "Configuração obrigatória ausente"
        });
    }
});

app.listen(PORT, () => {
    console.log(`API TechStore iniciada na porta ${PORT}`);
});
