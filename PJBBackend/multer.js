const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./Public/ImageUploads");
    }, 
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/svg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/gif"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 //bytes 1mb = 1024 bytes
        },
        fileFilter: fileFilter
    });

module.exports = upload




