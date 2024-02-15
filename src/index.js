require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

// Import Outfile
const usersRoutes = require("./routes/users");
const middlewareLogReq = require("./middleware/logs");
const upload = require("./middleware/multer");

app.use(middlewareLogReq);

/* Middleware Perizinan Request Body berupa JSON */
app.use(express.json());

/* Middleware untuk upload file */
app.use("/assets", express.static("public/images"));

/* Path Users */
app.use("/users", usersRoutes);

/* Path Upload */
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload success",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
