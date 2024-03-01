<template>
  <div class="login-container">
    <div class="form-wrapper">
      <h2 class="login-header">Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <input type="email" id="email" v-model="email" placeholder="Correo Electrónico" class="form-control">
        </div>
        <div class="form-group">
          <input type="password" id="password" v-model="password" placeholder="Contraseña" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      </form>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      console.log("Email:", email);
      console.log("Contraseña:", password);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/api/users/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Aquí puedes manejar la respuesta del servidor
          // Por ejemplo, redirigir a otra página si el login es exitoso
          if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('_id', data.user._id);
            localStorage.setItem('name', data.user.name)
            // Redirige al usuario a otra página
            window.location.href = "/inicio"; // Cambia "/dashboard" por la ruta deseada
          } else {
            alert("Credenciales inválidas"); // Muestra un mensaje de error si el login falla
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  }
};
</script>


<style scoped>
/* Estilos para el contenedor principal */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff; /* Fondo blanco */
  background-image: url('src/assets/fondo_login.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Estilos para el contenedor del formulario */
.form-wrapper {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco semitransparente */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra */
}

/* Estilos para el formulario de inicio de sesión */
.login-form {
  margin-bottom: 20px;
}

.login-header {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: calc(100% - 20px); /* Restamos 20px de margen a cada lado */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9; /* Fondo gris claro */
}

.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff; /* Azul */
  color: #fff; /* Color de texto blanco */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3; /* Azul más oscuro al pasar el cursor */
}

.error-message {
  color: #e74c3c; /* Rojo */
  margin-top: 10px;
}
</style>