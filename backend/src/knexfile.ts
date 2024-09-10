const config = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1234",
    database: "todo_app_db",
  },
  migrations: {
    directory: "./",
  },
  seeds: {
    directory: "./seeds",
  },
};

export default config;
