module.exports = {
    apps: [
      {
        name: "siddha-pi-client-admin-api",
        script: "./app.js", // Entry point of your app
        instances: 1,       // Number of instances (set "max" for all CPU cores)
        exec_mode: "fork",  // "cluster" or "fork"
        env: {
          NODE_ENV: "production",
          PORT: 3000,
        },
      },
    ],
  };
  