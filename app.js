const express = require('express');
const app = express();

app.use('/users', (req, res) => {
    res.send('<h1>Now this is the users page</h1>');
});

app.use('/', (req, res) => {
    res.send('<h1>Howdy, this is the slash page, you can go to the <a href="/users">users page</a> if you want</h1>');
});


app.listen(3000);