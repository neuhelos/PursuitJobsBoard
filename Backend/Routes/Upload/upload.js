const upload = require("../../Utilitique/multer")
const uploadRoute = require("express").Router()

uploadRoute.post("/upload", upload.single("image"), (req, res, next) => {
    try {
        let url = "http://localhost:4000/ImageUploads/" + req.file.filename;
        res.json({
            imageUrl: url,
            message: "File Uploaded"
        });
    } catch (error) {
        res.status(400).json({
        status: error,
        message: "Upload Failed"
        });
    }
});

module.exports = uploadRoute