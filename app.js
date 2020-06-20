const cron = require("node-cron");
const express = require("express");

app = express();


cron.schedule("* * * * * *", () => { let i = 0; console.log(`Executando a tarefa a cada ${i} segundo(s)`); i++;} );

app.listen(8080);