const express = require('express');
const app = express();
// importing db
const db=require('./db');

const bodyparser=require('body-parser')
app.use(bodyparser.json());


// Handle GET request for '/' route
app.get('/', (req, res) => {
    res.send('Hello this is abhay singh rathore');
});








const personroutes=require('./routes/personroutes');
app.use('/person',personroutes)

const menuItemsRoutes=require('./routes/menuItemsRoutes')
app.use('/menu',menuItemsRoutes)







// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
