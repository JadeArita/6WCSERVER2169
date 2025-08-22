const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer'); 
const mime = require('mime-types'); 


const urlencodedParser = bodyParser.urlencoded({ extended: false });

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'uploads')); 
    },
    filename: (req, file, cb) => {
       
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: fileStorage });


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/file-upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'file-upload.html'));
});

app.post('/upload', upload.single('myFile'), (req, res) => {
    console.log(req.file); // Log file details
    // Check MIME type (optional, but good for security)
    // if (req.file && mime.lookup(req.file.originalname) === 'image/webp') { // Example for specific type
    //     console.log('File is a webp image.');
    // } else {
    //     console.log('File is not a webp image or no file uploaded.');
    // }

    // Send a customized page to the client
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

app.post('/upload_error_example', upload.single('myFile'), (err, req, res, next) => {
    if (err) {
        console.error(err);
        res.end("Error uploading file.");
    } else {
        res.end("File is uploaded successfully!");
    }
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

app.get('/process_get', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.json(response);
});

app.post('/process_post', urlencodedParser, (req, res) => {
    const response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.json(response);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});