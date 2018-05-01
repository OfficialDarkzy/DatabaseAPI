ExternalConfig = {};

// Port API Runs On
ExternalConfig.Server = {
    port: 2000
}

// Database Connection Configs
ExternalConfig.Database = {
    host: "localhost",
    user: "root",
    password: "",
    database: "xrplife"
};

// API Configs
ExternalConfig.API = {
    route: "/external/api",
    secret: "yoursecretkey"
}

module.exports.config = ExternalConfig;
module.exports.server = ExternalConfig.Server;
module.exports.database = ExternalConfig.Database;
module.exports.api = ExternalConfig.API;