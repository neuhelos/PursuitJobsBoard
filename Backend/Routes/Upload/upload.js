const upload = require("../../multer")
const uploadRoute = require("express").Router()

uploadRoute.post("/", upload.single("image"), (req, res, next) => {
    try {
        let url = `"http://localhost:3000/ImageUploads/${req.file.filename}`;
        res.json({
            imageUrl: url,
            message: "File Uploaded"
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "Upload Failed"
        });
    }
});

module.exports = uploadRoute