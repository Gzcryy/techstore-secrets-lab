require("dotenv").config();

function getDatabaseConfig() {
    const required = ["DB_HOST", "DB_NAME", "DB_USER", "DB_PASSWORD"];

    for (const key of required) {
        if (!process.env[key]) {
            throw new Error(`Variável de ambiente obrigatória ausente: ${key}`);
        }
    }

    return {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    };
}

module.exports = {
    getDatabaseConfig
};
