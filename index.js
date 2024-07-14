const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
dotenv.config();


app.get('/', (req, res) => {
    res.send("Hello")
})


app.listen(process.env.PORT, () => {
    console.log('Listen at PORT')
})