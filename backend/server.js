const express = require('express');
const axios = require('axios');
const cors = require('cors');  // CORS package to allow cross-origin requests

const app = express();
const port = 3000;

// Enable CORS for all domains
app.use(cors());

// This route will handle the API request to the Valorant API
app.get('/api/valorant', async (req, res) => {
  try {
    // Set your API URL and Authorization header here
    const response = await axios.get('https://api.henrikdev.xyz/valorant/v2/mmr/ap/I%20like%20SpaceX/impac', {
      headers: {
        'Authorization': 'HDEV-2a3c970c-92fa-4bd5-9673-662de1a13fd7', // Replace with your API key
        'accept': 'application/json'
      }
    });

    // Send the response from Valorant API to the frontend
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Valorant API' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
