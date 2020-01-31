const express = require('express');
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public")
    },
    filename: function (req, file, cb) {
        const parts = file.mimetype.split("/");
        cb(null, `${file.fieldname}-${Date.now()}.${parts[1]}`)
    }
})

const upload = multer({storage});

app.post("/save-image", upload.single("image"), (req, res) => {
    res.status(201).json({path: req.file.filename});
})

app.use(express.static("public"));

app.listen(5678, () => console.log('server is running on port 5678'));