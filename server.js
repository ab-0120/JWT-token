const app = require('./src/app');
const config = require('./src/config/config');
const db = require('./src/config/database');

// connection to Database
db();

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
