const { Client } = require('pg')

const client = new Client({
    user: process.env.pgUser,
    host: process.env.pgHost,
    database: process.env.pgDatabase,
    password: process.env.pgPassword,
    port: process.env.pgPort,
});

client.connect();

module.exports = {
    getClient: () => {
        return client;
    }
}