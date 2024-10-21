
// Importeren espress module in node_modules
const express = require('express'); 
const Database = require('./classes/database.js'); 

//aanmakken espress app
const app = express(); 


const db = new Database(); 

//endpoints
app.get('/', (req, res) => {
    res.send('Hello World'); 
}); 


app.get('/api/artists', (req, res) => {
    const db = new Database(); 
    db.getQuery('Select * FROM artists').then((artists) => {
        res.send(artists); 
    }); 
}); 

app.get('/api/songs', (req, res) => {
    const db = new Database(); 
    db.getQuery(`
        SELECT song_id, s.name AS songname, a.name AS artistname
FROM 
	songs AS s 
		INNER JOIN 
			artists AS a
				ON 
					s.artist_id = a.artist_id; 
`).then((songs) => {
        res.send(songs); 
    }); 
}); 

// Starten server en op welke port moet server luisteren 
app.listen(3000, () => {
    console.log('Server is running op port 3000'); 
}); 