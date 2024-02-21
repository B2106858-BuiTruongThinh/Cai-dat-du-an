const app = require("./app");
const config = require("./app/config");

//start server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server i running on port ${PORT}.`);
});