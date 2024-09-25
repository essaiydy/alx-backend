import redis from 'redis';

// Create Redis client
const client = redis.createClient();

// Event listener for successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Event listener for error in connection
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

/**
 * Set the value for a key in Redis
 * @param {string} schoolName - The key to set in Redis
 * @param {string} value - The value to set for the key
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print); // redis.print provides a confirmation message
}

/**
 * Display the value for a given key from Redis
 * @param {string} schoolName - The key to retrieve the value for
 */
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, value) => {
    if (err) {
      console.error(err);
    } else {
      console.log(value);
    }
  });
}

// Test the functions
displaySchoolValue('Holberton');  // Display the value of 'Holberton'
setNewSchool('HolbertonSanFrancisco', '100');  // Set new key-value pair
displaySchoolValue('HolbertonSanFrancisco');  // Display the value of 'HolbertonSanFrancisco'
