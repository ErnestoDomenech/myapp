const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.length('/api', (req, res)=>{
    res.send('Hola caracola');
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});