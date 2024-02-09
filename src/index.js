const express = require("express");
const app = express();

// Import Outfile
const usersRoutes = require("./routes/users");
const middlewareLogReq = require("./middleware/logs");

const port = 4000;

app.use(middlewareLogReq);
/* Middleware Perizinan Request Body berupa JSON */
app.use(express.json());

app.use("/users", usersRoutes);

// app.get("/", (req, res) => {
//   res.json({
//     nama: "Ryan Arkhan",
//     email: "arkhan@gmail.com",
//   });
// });

// app.post("/", (req, res) => {
//   res.send("Hello Post xAbrakadabra");
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
