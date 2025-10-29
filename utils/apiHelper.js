const axios = require('axios');
const fs = require('fs');

const TOKEN_PATH = './utils/token.json';

async function getAuthToken() {
  try {
    // Example API request for token
    const response = await axios.post('https://example.com/api/login', {
      username: 'standard_user',
      password: 'secret_sauce'
    });

    const token = response.data.token;

    // Save token to local JSON file
    fs.writeFileSync(TOKEN_PATH, JSON.stringify({ token }));

    console.log('✅ Token stored successfully!');
    return token;

  } catch (error) {
    console.error('❌ Failed to get token:', error.message);
    throw error;
  }
}

function readStoredToken() {
  if (fs.existsSync(TOKEN_PATH)) {
    const data = fs.readFileSync(TOKEN_PATH);
    return JSON.parse(data).token;
  }
  return null;
}

module.exports = { getAuthToken, readStoredToken };
