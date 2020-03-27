const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const port = process.env.PORT || 3333;

app.use(cors());
// Serve para que o json passado no post seja convertido em um objeto js que a aplicação entenda. 
app.use(express.json()); 
app.use(routes);


app.listen(port, () => console.log('info',`Server is running at port ${port}`));