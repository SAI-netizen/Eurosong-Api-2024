
// Importeren espress module in node_modules
const express = require('express'); 
//aanmakken espress app
const app = express(); 

//endpoints
app.get('/', (req, res) => {
    res.send('Hello World'); 
}); 

// Starten server en op welke port moet server luisteren 
app.listen(3000, () => {
    console.log('Server is running op port 3000'); 
}); 