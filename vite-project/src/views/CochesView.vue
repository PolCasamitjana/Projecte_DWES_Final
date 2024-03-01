<template>
  <div id="app">
    <header>
      <h1>Seccion de Coches</h1>
    </header>
    <main id="car-list">
      <div v-for="(car, index) in cars" :key="index" class="car">
        <img :src="car.image" :alt="car.name">
        <h2>{{ car.name }}</h2>
        <p>Precio: {{ car.price }}</p>
        <p>{{ car.description }}</p>
      </div>
    </main>
    <section>
      <header>
        <h1>Foro de Discusión General</h1>
      </header>
      <div id="forum1">
        <!-- Formulario para publicar un nuevo tema -->
        <form @submit.prevent="submitTopic">
          <label for="topicTitle">Título:</label><br>
          <input type="text" id="topicTitle" v-model="newTopic.title" required><br>
          <label for="topicContent">Contenido:</label><br>
          <textarea id="topicContent" v-model="newTopic.content" required></textarea><br>
          <button type="submit">Publicar tema</button>
        </form>
        
       <div v-if="topics.length > 0">
  <h2>Temas</h2>
  <ul>
    <li v-for="topic in topics" :key="topic.id">
  <h3>{{ topic.user }}: {{ topic.title }}</h3>
  <p>{{ topic.text }}</p>
  <hr>
</li>
  </ul>
</div>
<div v-else>
  <p>No hay temas aún.</p>
</div>
      </div>
    </section>

   

  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        {
          name: "Porsche 911 GT3",
          image: "src/assets/images/porsche_911_gt3.png",
          price: "285.841€",
          description: "El Porsche 911 GT3 es un automóvil deportivo de alto rendimiento con un motor potente, transmisión avanzada y diseño aerodinámico. Ofrece una experiencia de conducción emocionante, ágil y precisa, tanto en carretera como en pista, y su interior está centrado en el conductor. Es un automóvil que combina potencia, elegancia y tecnología de vanguardia."
        },
        {
          name: "Ford Mustang Shelby",
          image: "src/assets/images/ford_mustang.jpg",
          price: "80.000€",
          description: "El Ford Mustang Shelby es un automóvil deportivo de alto rendimiento con un diseño distintivo, potente motor y tecnología avanzada. Ofrece una experiencia de conducción emocionante, un interior cómodo y un manejo ágil. Representa la pasión por la velocidad y la excelencia en ingeniería, con un legado icónico."
        },
        {
          name: "Ferrari 488 GTB",
          image: "src/assets/images/ferrari.jpg",
          price: "315.000€",
          description: "El Ferrari 488 GTB es un automóvil deportivo de altas prestaciones con un diseño aerodinámico, un motor V8 turboalimentado potente y una experiencia de conducción emocionante. Destaca por su velocidad, agilidad y lujo en cada detalle, representando la excelencia italiana en el mundo automotriz."
        },
        {
          name: "Lamborghini Huracán",
          image: "src/assets/images/huracan.png",
          price: "250.000€",
          description: "El Lamborghini Huracán es un automóvil deportivo de alto rendimiento con un diseño agresivo, un motor V10 potente y un manejo excepcional. Ofrece una experiencia de conducción emocionante, tanto en carretera como en pista, con tecnología avanzada y un interior lujoso. Es un icono de la pasión y la ingeniería italiana."
        },
        {
          name: "Chevrolet Corvette Stingray",
          image: "src/assets/images/corvette.jpg",
          price: "$60,000",
          description: "El Chevrolet Corvette Stingray es un automóvil deportivo de alto rendimiento con un diseño icónico, un potente motor V8 y tecnología avanzada. Ofrece una experiencia de conducción emocionante, combinando velocidad, estilo y comodidad. Es un símbolo del espíritu deportivo americano."
        },
        {
          name: "Audi R8",
          image: "src/assets/images/audi_r8.jpg",
          price: "150.000€",
          description: "El Audi R8 es un automóvil deportivo de alto rendimiento con un diseño elegante, tracción integral y un potente motor V10. Ofrece una experiencia de conducción emocionante, combinando tecnología de vanguardia y lujo en cada detalle. Es un símbolo de la ingeniería alemana y la pasión por la velocidad."
        },
        {
          name: "BMW M4",
          image: "src/assets/images/bmw_m4.png",
          price: "90.000€",
          description: "El BMW M4 es un automóvil deportivo de alto rendimiento con un diseño deportivo, un potente motor y tecnología avanzada. Ofrece una experiencia de conducción emocionante, con un equilibrio perfecto entre rendimiento y comodidad. Representa la tradición de BMW en el desarrollo de vehículos deportivos de alto nivel."
        },
        {
          name: "McLaren 720S",
          image: "src/assets/images/mclaren.png",
          price: "300.000€",
          description: "El McLaren 720S es un automóvil deportivo de última generación con un diseño aerodinámico, un potente motor V8 y tecnología de vanguardia. Ofrece una experiencia de conducción emocionante, con una combinación perfecta de velocidad, agilidad y lujo. Es un ejemplo de la excelencia británica en la industria automotriz."
        },
        {
          name: "Nissan GT-R",
          image: "src/assets/images/nissan_gt-r.jpg",
          price: "100.000€",
          description: "El Nissan GT-R es un icónico automóvil deportivo japonés con un diseño agresivo, tracción integral y un motor twin-turbo V6 potente. Ofrece una experiencia de conducción emocionante, destacando por su rendimiento excepcional y su tecnología innovadora. Es un símbolo de la ingeniería de alto rendimiento de Nissan."
        },
        {
          name: "Porsche Cayman",
          image: "src/assets/images/cayman.png",
          price: "70.000€",
          description: "El Porsche Cayman es un automóvil deportivo compacto con un diseño elegante, motor central y un manejo ágil. Ofrece una experiencia de conducción emocionante, combinando potencia y precisión en curvas. Es un automóvil que refleja la pasión de Porsche por la ingeniería deportiva y la excelencia en la conducción."
        }
      ],
      topics: [],
      newTopic: {
        title: '',
        content: '',
        user: ''
      },
      newPost: {
        problem: '',
        brand: '',
        date: ''
      }
    };
  },
  methods: {
    submitTopic() {
  const username = localStorage.getItem('name');
  console.log('username:', username);
  const topicData = {
    user: username,
    title: this.newTopic.title,
    text: this.newTopic.content // Asegúrate de que este campo se llama igual en el servidor
  };

  fetch("http://localhost:3000/api/foro/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(topicData)
  })
  .catch(error => {
    console.error("Error al publicar el tema:", error);
  });
}
  },
  mounted() {
    fetch("http://localhost:3000/api/foro/")
    .then(response => response.json())
    .then(data => {

      this.topics = [];


        data.forEach(topic => {
          this.topics.push({
            user: topic.user,
            title: topic.title,
            text: topic.text 
          });
        });

    })
    .catch(error => {
      console.error("Error al obtener los temas:", error);
    });
      }}


</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
}

#car-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.car {
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  margin: 10px;
  padding: 20px;
  width: 300px;
  border: 1px solid #bd4646; /* Agregamos un borde sólido de color gris */
}

.car img {
  width: 100%;
  height: 180px; /* Establece una altura fija para todas las imágenes */
  border-radius: 5px;
  object-fit: cover; /* Ajusta la imagen al contenedor manteniendo la relación de aspecto */
}

.car h2 {
  margin-top: 10px;
}

.car p {
  margin: 10px 0;
}

/* Estilos del apartado del foro */
#forum1 {
  padding: 20px;
  background-color: #f8f9fa; /* Cambiamos el color de fondo */
  border-radius: 10px; /* Aumentamos el radio de borde para hacerlo más redondeado */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Agregamos una sombra más suave */
  margin: 20px;
}

#forum1 header {
  text-align: center; /* Centramos el texto del encabezado */
  margin-bottom: 20px; /* Agregamos un espacio inferior */
}

.forum1-comment {
  border: 1px solid #ccc; /* Agregamos un borde alrededor de cada comentario */
  border-radius: 5px; /* Añadimos bordes redondeados */
  padding: 15px; /* Ajustamos el relleno */
  margin-bottom: 15px; /* Aumentamos el espacio inferior */
}

.user-comment {
  background-color: #007bff; /* Cambiamos el color de fondo a azul */
  color: #fff; /* Cambiamos el color del texto a blanco */
  border: 1px solid #0056b3; /* Agregamos un borde azul más oscuro */
}

#forum1 form {
  margin-bottom: 20px;
}

#forum1 form label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px; /* Aumentamos el espacio inferior */
  color: #333; /* Cambiamos el color del texto a un tono más oscuro */
}

#forum1 form input[type="text"],
#forum1 form textarea {
  width: 100%;
  padding: 12px; /* Aumentamos el relleno para hacer los campos de entrada más grandes */
  margin-bottom: 15px; /* Aumentamos el espacio inferior */
  border: 1px solid #ccc; /* Agregamos un borde gris claro */
  border-radius: 5px; /* Añadimos bordes redondeados */
  box-sizing: border-box; /* Aseguramos que el relleno y el borde no afecten el tamaño total */
}

#forum1 form button {
  background-color: #007bff; /* Cambiamos el color de fondo a azul */
  color: #fff;
  border: none;
  padding: 12px 20px; /* Aumentamos el relleno */
  cursor: pointer;
  border-radius: 5px; /* Añadimos bordes redondeados */
  transition: background-color 0.3s ease; /* Agregamos una transición suave al color de fondo */
}

#forum1 form button:hover {
  background-color: #0056b3; /* Cambiamos el color de fondo al pasar el ratón por encima */
}

#forum2 {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin: 20px;
}

#forum2 header {
  text-align: center;
  margin-bottom: 20px;
}

.forum2-comment {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
}

.user-comment {
  background-color: #007bff;
  color: #fff;
  border: 1px solid #0056b3;
}

#forum2 form {
  margin-bottom: 20px;
}

#forum2 form label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

#forum2 form input[type="text"],
#forum2 form input[type="date"],
#forum2 form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

#forum2 form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

#forum2 form button:hover {
  background-color: #0056b3;
}
</style>
  