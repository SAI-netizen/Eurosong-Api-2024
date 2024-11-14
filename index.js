
// Importeren espress module in node_modules
const express = require ('express'); 
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


app.get('/api/artists', (req, res) => {
    const db = new Database(); 
    db.getQuery('Select * FROM artists').then((artists) => {
        res.send(artists); 
    }); 
}); 

app.get('/api/ranking', (req, res) => {
    const db = new Database(); 
    db.getQuery(`
        SELECT song_id, s.name AS songname, a.name AS artistname
FROM 
	songs AS s 
		INNER JOIN 
			artists AS a
				ON 
					s.artist_id = a.artist_id; 
                    
SELECT songs.song_id, songs.name as songs_name, artists.name AS artist_name, SUM(points) AS total_points 
FROM votes
	INNER JOIN 
		songs ON songs.song_id = votes.song_id
	INNER JOIN 
		artists ON songs.artist_id = artists.artist_id
GROUP BY song_id
ORDER BY SUM(points) DESC; 		 
`).then((ranking) => {
        res.send(ranking); 
    }); 
}); 

// Starten server en op welke port moet server luisteren 
app.listen(3000, () => {
    console.log('Server is running op port 3000'); 
}); 