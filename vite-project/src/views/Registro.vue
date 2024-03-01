<template>
  <div class="register-container">
    <div class="form-wrapper">
      <div class="register-header">Registro</div>
      <div class="form-group">
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" required v-model="username" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required v-model="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required v-model="password" class="form-control">
      </div>
      <button @click="registerUser" class="btn">Registrarse</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        registerUser() {
            const username = this.username;
            const email = this.email;
            const password = this.password;
            
            console.log("Usuario:", username);
            console.log("Correo electrónico:", email);
            console.log("Contraseña:", password);

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "name": username,
                "email": email,
                "password": password,
                "isAdmin": false
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/users/register", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log("hol" + result);
                    window.location.href = '/login';
                })
                .catch(error => console.log('error', error));
        }
    }
};


</script>

<style scoped>
.register-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('src/assets/fondo_login.jpg');
  background-size: cover;
  background-position: center;
}

.form-wrapper {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register-header {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: calc(100% - 40px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
