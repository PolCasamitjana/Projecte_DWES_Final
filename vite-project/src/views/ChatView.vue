<template>
  <div class="chat-container">
    <h1>Chat App</h1>
    <div class="messages">
      <div v-for="(message, index) in chatMessages" :key="index" class="message">
        <span class="username">{{ message.username }}:</span> {{ message.text }}
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="messageText" placeholder="Escribe tu mensaje">
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'ChatVue',
  data() {
      
    return {
      socket: null,
      chatMessages: JSON.parse(localStorage.getItem('chatMessages')) || [],
      messageText: '',
      username: localStorage.getItem('name')
    };
  },
  mounted() {
    // Conectar con el servidor WebSocket
    this.socket = io('http://localhost:5173'); // Aquí debes poner la URL de tu servidor WebSocket

    // Escuchar eventos del servidor WebSocket
    this.socket.on('connect', () => {
      console.log('Conectado al servidor WebSocket');
      this.username = localStorage.getItem('name'); // Recuperar el nombre de usuario del localStorage
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor WebSocket');
    });

    this.socket.on('message', (message) => {
      this.chatMessages.push(message);
      localStorage.setItem('chatMessages', JSON.stringify(this.chatMessages));
    });
  },
  methods: {
    sendMessage() {
      if (this.messageText.trim() !== '') {
        const message = {
          username: this.username,
          text: this.messageText
        };
        this.chatMessages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(this.chatMessages));
        this.socket.emit('message', message);
        this.messageText = ''; // Limpiar el campo de entrada después de enviar el mensaje
      }
    }
  },
  beforeDestroy() {
    // Desconectar del servidor WebSocket al destruir el componente
    if (this.socket) {
      this.socket.disconnect();
    }
  }
};
</script>

<style scoped>
.chat-container {
  max-width: 1500px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  background-color: #f7f7f7cc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.messages {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 5px;
}

.message {
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.username {
  font-weight: bold;
  color: #333;
}

form {
  margin-top: 20px;
}

input[type="text"] {
  width: calc(100% - 80px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  outline: none;
}

button[type="submit"] {
  background-color: #4CAF50;
  margin-top: 10px;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

button[type="submit"]:focus {
  outline: none;
}
</style>
