
// Importeren espress module in node_modules
const express = require('express'); 
const mysql = require('mysql2/promise');



//aanmakken espress app
const app = express(); 

const connect = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root', 
        database: 'eurosongdb',
        port: 3306
      });

      console.log(connection); 

}; 

connect(); 

//endpoints
app.get('/', (req, res) => {
    res.send('Hello World'); 
}); 


app.get('/api/artists', (req, res) => {
    res.send(
        [
            "JB",
            "Beyonce",
        ]
    ); 
}); 

// Starten server en op welke port moet server luisteren 
app.listen(3000, () => {
    console.log('Server is running op port 3000'); 
}); 