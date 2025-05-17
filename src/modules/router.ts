// Создаем подключение к WebSocket-серверу
const socket = new WebSocket('ws://localhost:8080');

// Обработчик открытия соединения
socket.addEventListener('open', (event: Event) => {
  console.log('WebSocket connection established');
  socket.send('Hello Server!');
});

// Обработчик входящих сообщений
socket.addEventListener('message', (event: MessageEvent) => {
  console.log('Received message:', event.data);
});

// Обработчик ошибок
socket.addEventListener('error', (event: Event) => {
  console.error('WebSocket error:', event);
});

// Обработчик закрытия соединения
socket.addEventListener('close', (event: CloseEvent) => {
  console.log('WebSocket connection closed:', event.reason);
});

export default socket