#!/usr/bin/yarn dev
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
