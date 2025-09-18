const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.get('/', async (req, res) =>{

    try {
        const weatherResponse = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&timezone=Europe/Berlin');
        const temperature = weatherResponse.data.current.temperature_2m;
        const html = `
            <html>
                <head>
                    <title>Wetter App</title>
                </head>
                <body>
                    <h1>Wetter-App</h1>
                    <p>In Berlin ist es heute ${temperature}°C.</p>
                    <br>
                    <a href="/about">Über uns</a>
                </body>
            </html>
        `;
        res.send(html);
    } catch (error) {
        console.error('Fehler beim Abrufen der Wetterdaten:', error.message);
        res.status(500).send('Fehler beim Laden der Wetterdaten');

}
});

app.listen(port, () =>{  console.log(`Server läuft auf http://localhost:${port}`);
})