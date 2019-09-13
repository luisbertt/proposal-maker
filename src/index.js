const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes/routes");
const { mongoose } = require("./db");
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/tasks", routes);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
