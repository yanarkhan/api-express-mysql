const express = require("express");
const app = express();
const mysql = require("mysql2");

const port = 4000;

// Import Outfile
const usersRoutes = require("./routes/users");
const middlewareLogReq = require("./middleware/logs");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "lat_api",
});

app.use(middlewareLogReq);

/* Middleware Perizinan Request Body berupa JSON */
app.use(express.json());

app.use("/users", usersRoutes);

app.use("/", (req, res) => {
  dbPool.execute("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.json({
        message: "Connection is failed",
      });
    }

    res.json({
      message: "Connection is success",
      data: rows,
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
