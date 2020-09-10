const express = require("express");
const app = express();
const taskRoutes = require("./src/routes");
//mongodb connection
const { mongoose } = require('./src/db')

//settings
app.set("port", 3010 || 8080);

//middlewares
app.use(express.json());

//routes
app.use("/api/tasks", taskRoutes);

app.listen(app.get("port"), () => {
  console.log("server running on port: " + app.get("port"));
});
