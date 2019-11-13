module.exports.adapters = {
  default: "disk",
  disk: {
    module: "sails-disk"
  },
  "mysql-adapter": {
    module: "sails-mysql",
    host: "localhost",
    user: "root",
    password: "",
    database: "",
    collection: 'sessions',
auto_reconnect: false,
ssl: false,
stringify: true
  }
};
