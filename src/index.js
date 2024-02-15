require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

// Import Outfile
const usersRoutes = require("./routes/users");
const middlewareLogReq = require("./middleware/logs");

app.use(middlewareLogReq);

/* Middleware Perizinan Request Body berupa JSON */
app.use(express.json());
/* Middleware untuk upload file */
app.use("/assets", express.static("public/images"));

/*  */
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
