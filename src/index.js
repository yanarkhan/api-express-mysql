const express = require("express");
const app = express();

const port = 4000;

// Import Outfile
const usersRoutes = require("./routes/users");
const middlewareLogReq = require("./middleware/logs");

app.use(middlewareLogReq);

/* Middleware Perizinan Request Body berupa JSON */
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
