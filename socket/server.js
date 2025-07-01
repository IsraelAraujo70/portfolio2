const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle chat messages
  socket.on('chat_message', (data) => {
    console.log('Chat message received:', data);
    // Broadcast to all connected clients
    socket.broadcast.emit('chat_message', data);
  });

  // Handle AI chat
  socket.on('ai_chat', async (data) => {
    console.log('AI chat message:', data);
    // Here you would integrate with OpenAI API
    // For now, just echo back
    socket.emit('ai_response', {
      id: Date.now(),
      content: `Echo: ${data.message}`,
      role: 'assistant',
      timestamp: new Date()
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.SOCKET_PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});