<template>
  <div class="header-normal">
    <ul>
      <li><router-link to="/inicio" class="nav-link">Inicio</router-link></li>
      <li><router-link to="/coches" class="nav-link">Coches</router-link></li>
      <li><router-link to="/motos" class="nav-link">Motos</router-link></li>
      <li><router-link to="/noticias" class="nav-link">Noticias</router-link></li>
      <li><router-link to="/login" class="nav-link">Iniciar Sesión</router-link></li>
      <li><router-link to="/registro" class="nav-link">Registro</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-normal {
  top: 0;
  left: 0;
  width: 100%;
  background-color: #222;
  padding: 45px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  font-family: 'Arial', sans-serif; /* Cambia la fuente */
  /* position: fixed; */
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  margin-right: 30px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffcc00;
}
</style>
