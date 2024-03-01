<template>
  <footer class="footer">
    <div class="social-links">
      <a href="https://www.instagram.com/tucuenta" target="_blank" class="social-link"><img src="/src/assets/Instagram_icon.png" alt="Instagram"></a>
      <a href="https://twitter.com/tucuenta" target="_blank" class="social-link"><img src="/src/assets/Logo_of_Twitter.png" alt="Twitter"></a>
      <div class="chat-icon-container">
        <router-link to="/chat"><a target="_blank" class="social-link chat-icon"><img src="/src/assets/chat.webp" alt="Chat"></a></router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
<style scoped>
.social-links {
  gap: 10px;
  display: flex;
  justify-content: center;
}

.social-link img {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  transition: opacity 0.3s ease;
}

.chat-icon-container {
  justify-self: end;
  align-self: flex-end;
}

.social-link img:hover {
  opacity: 0.7;
}
</style>
