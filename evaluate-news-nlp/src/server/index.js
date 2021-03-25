const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const axios = require('axios')
const mockAPIResponse = require('./mockAPI.js')
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1'

const apiKey = process.env.API_KEY;

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require("cors");
const { response } = require('express');
app.use(cors());

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

 const getData = ("/evaluate", async(request,response) => {
    var url = '';
    try {
    const newUrl = await axios.get(`${apiUrl}?key=${apiKey}&url=${url}&lang=en`) ;
    const postedData = (newUrl , {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },

    })

      
    response.getData = {score_tag, sentiment, agreement, subjectivity, confidence, irony} ;
    response.send({
        score_tag,
        sentiment, 
        agreement,
       subjectivity,
       confidence, 
        irony
    });
    
} catch (error) {
    console.log("error", error);
}
});


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Working on port 8080!')
  
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



