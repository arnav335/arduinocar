// Import the Socket.IO library
import io from 'socket.io-client'

// Replace 'http://example.com' with your Socket.IO server URL
const socket = io('http://127.0.0.1/socket.io/socket.io.js');

// Connection opened
socket.on('connect', () => {
    console.log('Connected to the server');
    
    // Send a message to the server
    socket.emit('message', 'Hello, server!');
});

// Listen for messages from the server
socket.on('message', (data) => {
    console.log('Message from server:', data);
});

// Listen for any errors that occur.
socket.on('error', (error) => {
    console.error('Socket encountered error:', error);
});

// Connection closed
socket.on('disconnect', () => {
    console.log('Disconnected from the server');
});
