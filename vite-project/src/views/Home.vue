<template>
  <div class="full-screen">
    <div class="intro-container">
      <div class="introduction">
        <h1>¡Bienvenidos al Foro del Motor!</h1>
        <p>
          Sumérgete en el apasionante mundo del motor con nuestro foro dedicado a todos los entusiastas y aficionados del automovilismo. Aquí encontrarás un espacio dinámico y vibrante donde podrás mantenerte al tanto de la actualidad del mundo del motor, desde las últimas noticias sobre carreras y lanzamientos de vehículos hasta las tendencias más recientes en tecnología automotriz.
        </p>
        <p>
          Nuestro foro no solo te ofrece la oportunidad de mantenerte informado, sino que también te brinda la posibilidad de participar activamente en la comunidad. ¡Tus opiniones y comentarios son bienvenidos! Comparte tus experiencias, intercambia conocimientos y conecta con otros apasionados del motor de forma gratuita.
        </p>
        <p>
          Únete a nosotros y forma parte de esta emocionante comunidad donde la pasión por el motor nos une. ¡Explora, participa y disfruta en el Foro del Motor!
        </p>
      </div> <!-- Cierre de la etiqueta div con clase "introduction" -->
    </div> <!-- Cierre de la etiqueta div con clase "intro-container" -->
    <div class="options-container">
      <div class="option" @click="$router.push({ name: 'coches' })">
        <h2>¿Te gustan los coches?</h2>
        <p>Los coches son una forma de transporte que ha revolucionado la movilidad humana...</p>
      </div>
      <div class="option" @click="$router.push({ name: 'motos' })">
        <h2>¿Te gustan las motos?</h2>
        <p>Las motocicletas son una forma de transporte única que ofrece una experiencia de conducción incomparable...</p>
      </div>
    </div>
    <div class="slideshow">
      <img :src="currentImage" alt="Slide de presentación">
    </div>
  </div> <!-- Cierre de la etiqueta div con clase "full-screen" -->
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const images = [
  'src/assets/f.jpg',
  'src/assets/moto.jpeg',
  'src/assets/Fo.png',
  'src/assets/1366_2000.jpeg',
  'src/assets/G.png'
];
const currentImageIndex = ref(0);

const currentImage = computed(() => {
  return images[currentImageIndex.value];
});

const startImageSlider = () => {
  setInterval(() => {
    changeImage();
  }, 5000); // Cambia la imagen cada 5 segundos
};

const changeImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

onMounted(() => {
  startImageSlider();
});

</script>

<style scoped>
  /* Estilos para el contenedor principal */
.full-screen {
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: 100px;
}

/* Estilos para el contenedor de la introducción */
.intro-container {
  position: absolute;
  top: 20%; /* Centra verticalmente */
  left: 50%; /* Centra horizontalmente */
  transform: translate(-50%, -50%); /* Centra precisamente */
  text-align: center;
  width: 80%; /* Ajusta el ancho según sea necesario */
  max-width: 800px; /* Ajusta el ancho máximo según sea necesario */
}

/* Estilos para el texto de introducción */
.introduction {
  margin-bottom: 20px;
}

/* Estilos para el contenedor de opciones */
.options-container {
  padding: 10px;
  position: absolute;
  bottom: 20px; /* Ajusta la posición vertical según sea necesario */
  left: 50%; /* Centra horizontalmente */
  transform: translateX(-50%); /* Centra horizontalmente precisamente */
  display: flex;
  justify-content: space-around;
  width: 80%; /* Ajusta el ancho según sea necesario */
  max-width: 800px; /* Ajusta el ancho máximo según sea necesario */
  margin-bottom: -25px;
}

/* Estilos para las opciones */
.option {
  width: 45%; /* Ajusta el ancho de cada opción según sea necesario */
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
  margin: 20px;
  transition: all 0.3s ease; /* Transición suave para todos los cambios */
  cursor: pointer; /* Cambia el cursor a una mano para indicar que es clickeable */
}

.option:hover, .option:focus {
  border-color: #007bff; /* Cambia el color del borde al hacer hover o focus */
  background-color: rgba(0, 123, 255, 0.1); /* Fondo ligeramente azul al hacer hover */
  transform: scale(1.05); /* Aumenta ligeramente el tamaño para dar sensación de elevación */
}
/* Estilos para el slideshow */
.slideshow {
  position: absolute;
  top: 51%; /* Centra verticalmente */
  left: 50%; /* Centra horizontalmente */
  transform: translate(-50%, -50%); /* Centra horizontal y verticalmente */
}

/* Estilos para las imágenes del slideshow */
.slideshow img {
  width: 400px; /* Ancho fijo */
  max-width: 100%; /* Limita el ancho máximo al 100% del contenedor */
  height: auto; /* Altura automática para mantener la proporción */
  border-radius: 12px;
  display: block; /* Para que el margen automático funcione correctamente */
  margin: 0 auto; /* Centra horizontalmente */
}


</style>
