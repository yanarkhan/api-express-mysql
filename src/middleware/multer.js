const multer = require("multer");

/* tempat penyimpanan file */
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "public/images");
  },
  filename: (req, file, callBack) => {
    const timeStamp = new Date().getTime();
    const originalNameFile = file.originalname;

    callBack(null, `${timeStamp} - ${originalNameFile}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
