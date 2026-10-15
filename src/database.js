
const { getDatabaseConfig } = require("./config");

function connect() {
    const database = getDatabaseConfig();

    // Não registrar usuário ou senha nos logs.
    console.log(`Configuração de conexão preparada para o banco ${database.database}.`);

    return {
        host: database.host,
        port: database.port,
        database: database.database,
        username: database.username,
        password: database.password
    };
}

module.exports = {
    connect
};
