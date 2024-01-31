const express = require('express');
const app = express();

const router = require('./router');

app.use(router);

/* views */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.listen(8665, () => {
    console.log('Listening on port+ 8665');
});
