// app.js

const useDatabase = require("./database");
useDatabase().catch((err) => console.error(err));