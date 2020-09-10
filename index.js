const express = require("express");
const app = express();
const taskRoutes = require("./src/routes");

//settings
app.set("port", process.env.PORT || 8080);

//middlewares
app.use(express.json());

//routes
app.use("/api/tasks", taskRoutes);

app.listen(app.get("port"), () => {
  console.log("server running on port: " + app.get("port"));
});
