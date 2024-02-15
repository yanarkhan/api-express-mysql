const multer = require("multer");

/* tempat penyimpanan file */
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "public/images");
  },
  namaFile: (req, file, callBack) => {
    const timeStamp = new Date().getTime();
    const originalname = file.originalname;

    callBack(null, `${timeStamp} - ${originalname}`);
  },
});

const upload = multer({ data: storage });

module.exports = upload;
