const upload = require("../../multer")
const uploadRoute = require("express").Router()

const apiURL = require('../../Utilitique/apiURLDev')

uploadRoute.post("/", upload.single("image"), (req, res, next) => {
    try {
        let url = `${apiURL}/ImageUploads/${req.file.filename}`;
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