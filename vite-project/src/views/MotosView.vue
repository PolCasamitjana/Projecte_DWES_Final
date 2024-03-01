<template>
  <div id="app">
    <section>
        <header>
        <h1>MODELOS MÁS COMUNES</h1>
        </header>
        <main id="moto-list">
        <div v-for="(moto, index) in motos.slice(0, 8)" :key="index" class="moto">
            <img :src="moto.image" :alt="moto.name" class="zoom">
          <figcaption>
            <h2>{{ moto.name }}</h2>
            <p>Precio: {{ moto.price }}</p>
            <p>{{ moto.description }}</p>
          </figcaption>
        </div>
        </main> 
    </section>

    <section>
      <header>
        <h1>MODELOS</h1>
      </header>
      <main id="moto-list">
        <div v-for="(moto, index) in modelos.slice(0, 8)" :key="index" class="modelo">
          <figure>
            <img :src="moto.image" :alt="moto.name" class="zoom">
              <figcaption>
              <h2>{{ moto.name }}</h2>
              <p>Precio: {{ moto.price }}</p>
              <p>{{ moto.description }}</p>
              </figcaption>
          </figure>
        </div>
      </main> 
    </section>

    <section>
      <header>
        <h1>ENCUENTROS</h1>
      </header>
      <main id="moto-list">
        <div v-for="(encuentro, index) in encuentros.slice(0, 8)" :key="index" class="encuentro">
          <figure>
            <img :src="encuentro.image" :alt="encuentro.nombre" class="zoom">
              <figcaption>
                <h2>{{ encuentro.nombre }}</h2>
                <p>Fecha: {{ encuentro.fecha }}</p>
                <p>Lugar: {{ encuentro.lugar }}</p>
              </figcaption>
          </figure>
        </div>  
      </main> 
    </section>

    <section>
      <header>
        <h1>EVENTOS</h1>
      </header>
      <main id="moto-list">
        <div v-for="(evento, index) in eventos.slice(0, 8)" :key="index" class="evento">
          <figure>
              <img :src="evento.image" :alt="evento.nombre" class="zoom">
              <figcaption>
                <h2>{{ evento.nombre }}</h2>
                <p>Fecha: {{ evento.fecha }}</p>
                <p>Lugar: {{ evento.lugar }}</p>
              </figcaption>
          </figure>
        </div>
      </main> 
    </section>

    <section>
      <header>
        <h1>Foro de Discusión General</h1>
      </header>
      <div id="forum1">
        <!-- Formulario para publicar un nuevo tema -->
        <form @submit.prevent="submitTopic">
          <label for="topicTitle">Título del tema:</label><br>
          <input type="text" id="topicTitle" v-model="newTopic.title" required><br>
          <label for="topicContent">Contenido del tema:</label><br>
          <textarea id="topicContent" v-model="newTopic.content" required></textarea><br>
          <button type="submit">Publicar tema</button>
        </form>
        
        <!-- Lista de temas -->
        <div v-if="topics.length > 0">
          <h2>Temas</h2>
          <ul>
            <li v-for="topic in topics" :key="topic.id">
              <h3>{{ topic.title }}</h3>
              <p>{{ topic.content }}</p>
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
      motos: [     
        {
            "name": "Yamaha YZF-R6",
            "image": "src/assets/ForoMotos/yamaha_yzf_r6.png",
            "price": "$15,000",
            "description": "La Yamaha YZF-R6 es una motocicleta deportiva fabricada por Yamaha Motor Company. Es conocida por su rendimiento en pista y su estilo agresivo.",
            "foto": "src/assets/ForoMotos/chatForo.png"
        },
        {
            "name": "Honda CBR600RR",
            "image": "src/assets/ForoMotos/honda_cbr600rr.png",
            "price": "$13,500",
            "description": "La Honda CBR600RR es una motocicleta deportiva de alto rendimiento fabricada por Honda. Es reconocida por su excelente manejo y su potente motor de 600cc.",
            "foto": "src/assets/ForoMotos/chatForo.png"
        },
        {
            "name": "Kawasaki Ninja ZX-10R",
            "image": "src/assets/ForoMotos/kawasaki_ninja_zx10r.png",
            "price": "$17,000",
            "description": "La Kawasaki Ninja ZX-10R es una motocicleta superdeportiva de alta gama fabricada por Kawasaki. Es popular en competiciones de superbikes y conocida por su potencia y agilidad en la pista.",
            "foto": "src/assets/ForoMotos/chatForo.png"
        },
      ],
    
      modelos: [
        {
            "name": "Yamaha YZF-R6",
            "image": "src/assets/ForoMotos/yamaha_yzf_r6.png",
            "price": "$15,000",
            "description": "La Yamaha YZF-R6 es una motocicleta deportiva fabricada por Yamaha Motor Company. Es conocida por su rendimiento en pista y su estilo agresivo."
        },
        {
            "name": "Honda CBR600RR",
            "image": "src/assets/ForoMotos/honda_cbr600rr.png",
            "price": "$13,500",
            "description": "La Honda CBR600RR es una motocicleta deportiva de alto rendimiento fabricada por Honda. Es reconocida por su excelente manejo y su potente motor de 600cc."
        },
        {
            "name": "Suzuki GSX-R1000",
            "image": "src/assets/ForoMotos/Suzuki.png",
            "price": "$16,500",
            "description": "La Suzuki GSX-R1000 es una motocicleta deportiva fabricada por Suzuki. Conocida por su potencia y manejo ágil, es popular entre los entusiastas de las carreras."
        },
        {
            "name": "Ducati Panigale V4",
            "image": "src/assets/ForoMotos/Ducati.png",
            "price": "$22,000",
            "description": "La Ducati Panigale V4 es una motocicleta superdeportiva fabricada por Ducati. Destaca por su diseño elegante y su motor de alto rendimiento."
        },
        {
            "name": "Kawasaki Z900",
            "image": "src/assets/ForoMotos/kawasaki.png",
            "price": "$11,500",
            "description": "La Kawasaki Z900 es una motocicleta naked de alta gama fabricada por Kawasaki. Ofrece una combinación de potencia y maniobrabilidad, ideal para el uso diario y la diversión en carretera."
        },
        {
            "name": "BMW S1000RR",
            "image": "src/assets/ForoMotos/bmw.png",
            "price": "$20,000",
            "description": "La BMW S1000RR es una motocicleta deportiva fabricada por BMW Motorrad. Con tecnología de vanguardia y un rendimiento excepcional, es una de las favoritas en las pistas de carreras."
        },
        {
            "name": "Triumph Street Triple",
            "image": "src/assets/ForoMotos/triumph.png",
            "price": "$10,500",
            "description": "La Triumph Street Triple es una motocicleta naked fabricada por Triumph Motorcycles. Destaca por su estilo urbano y su agilidad en la conducción, ideal para la ciudad y la diversión en carretera."
        },
        {
            "name": "Harley-Davidson Sportster Iron 883",
            "image": "src/assets/ForoMotos/Harley.png",
            "price": "$9,500",
            "description": "La Harley-Davidson Sportster Iron 883 es una motocicleta cruiser fabricada por Harley-Davidson. Con su estilo clásico y su potente motor V-Twin, es una opción popular entre los aficionados a las motos custom."
        },
        {
            "name": "MV Agusta F3 800",
            "image": "src/assets/ForoMotos/agusta.webp",
            "price": "$24,000",
            "description": "La MV Agusta F3 800 es una motocicleta deportiva de alta gama fabricada por MV Agusta. Con su diseño distintivo y su rendimiento excepcional, es una opción exclusiva para los entusiastas de las motos de lujo."
        },
        {
            "name": "Aprilia Tuono V4 1100",
            "image": "src/assets/ForoMotos/aprilia.webp",
            "price": "$18,000",
            "description": "La Aprilia Tuono V4 1100 es una motocicleta naked de alto rendimiento fabricada por Aprilia. Con su potente motor V4 y su avanzada tecnología de suspensión, ofrece una experiencia de conducción emocionante en carretera."
        }
      ],

      eventos: [
          {
              nombre: "Gran Prix de MotoGP",
              fecha: "15 de marzo de 2024",
              lugar: "Circuito de Jerez, España",
              image: "src/assets/ForoMotos/Evento1.jpeg"
          },
          {
              nombre: "Rally de Motocross",
              fecha: "20 de abril de 2024",
              lugar: "Desierto de Atacama, Chile",
              image: "src/assets/ForoMotos/Evento2.jpg"
          },
          {
              nombre: "Carrera de Superbikes",
              fecha: "5 de mayo de 2024",
              lugar: "Autódromo Internacional Nelson Piquet, Brasil",
              image: "src/assets/ForoMotos/Evento3.jpg"
          },
          {
              nombre: "Desfile de Motocicletas Vintage",
              fecha: "12 de junio de 2024",
              lugar: "París, Francia",
              image: "src/assets/ForoMotos/Evento4.jpg"
          },
          {
              nombre: "Concurso de Acrobacias Freestyle",
              fecha: "25 de julio de 2024",
              lugar: "Estadio Olímpico de Montreal, Canadá",
              image: "src/assets/ForoMotos/Evento5.jpg"
          },
          {
              nombre: "Exhibición de Motocicletas Clásicas",
              fecha: "8 de agosto de 2024",
              lugar: "Goodwood, Reino Unido",
              image: "src/assets/ForoMotos/Evento6.webp"
          },
          {
              nombre: "Carrera de Resistencia Enduro",
              fecha: "17 de septiembre de 2024",
              lugar: "Montañas Rocosas, Estados Unidos",
              image: "src/assets/ForoMotos/Evento7.webp"
          },
          {
              nombre: "Encuentro de Motociclistas Solidarios",
              fecha: "3 de octubre de 2024",
              lugar: "Ciudad de México, México",
              image: "src/assets/ForoMotos/Evento8.webp"
          },
          {
              nombre: "Rally de Aventura Off-Road",
              fecha: "19 de noviembre de 2024",
              lugar: "Sahara, Marruecos",
              image: "src/assets/ForoMotos/Evento9.jpg"
          },
          {
              nombre: "Competición de Motocross Extremo",
              fecha: "7 de diciembre de 2024",
              lugar: "Valle de la Muerte, Estados Unidos",
              image: "src/assets/ForoMotos/Evento10.webp"
          }
      ],


      encuentros: [
        {
            nombre: "Encuentro de Moteros del Norte",
            fecha: "5 de febrero de 2024",
            lugar: "Ciudad de México, México",
            image: "src/assets/ForoMotos/Encuentro1.jpg"
        },
        {
            nombre: "Ruta de Motociclistas por la Costa Este",
            fecha: "10 de marzo de 2024",
            lugar: "Miami, Estados Unidos",
            image: "src/assets/ForoMotos/Encuentro2.jpg"
        },
        {
            nombre: "Encuentro de Moteros del Norte",
            fecha: "5 de febrero de 2024",
            lugar: "Ciudad de México, México",
            image: "src/assets/ForoMotos/Encuentro3.jpeg"
        },
        {
            nombre: "Ruta de Motociclistas por la Costa Este",
            fecha: "10 de marzo de 2024",
            lugar: "Miami, Estados Unidos",
            image: "src/assets/ForoMotos/Encuentro4.jpg"
        },
        {
            nombre: "Encuentro de Moteros del Norte",
            fecha: "5 de febrero de 2024",
            lugar: "Ciudad de México, México",
            image: "src/assets/ForoMotos/Encuentro5.jpg"
        },
        {
            nombre: "Ruta de Motociclistas por la Costa Este",
            fecha: "10 de marzo de 2024",
            lugar: "Miami, Estados Unidos",
            image: "src/assets/ForoMotos/Encuentro6.jpg"
        },
        {
            nombre: "Encuentro de Moteros del Norte",
            fecha: "5 de febrero de 2024",
            lugar: "Ciudad de México, México",
            image: "src/assets/ForoMotos/Encuentro7.jpg"
        },
        {
            nombre: "Ruta de Motociclistas por la Costa Este",
            fecha: "10 de marzo de 2024",
            lugar: "Miami, Estados Unidos",
            image: "src/assets/ForoMotos/Encuentro8.jpg"
        },
        {
            nombre: "Encuentro de Moteros del Norte",
            fecha: "5 de febrero de 2024",
            lugar: "Ciudad de México, México",
            image: "src/assets/ForoMotos/Encuentro9.jpg"
        },
        {
            nombre: "Ruta de Motociclistas por la Costa Este",
            fecha: "10 de marzo de 2024",
            lugar: "Miami, Estados Unidos",
            image: "src/assets/ForoMotos/Encuentro10.jpg"
        },
        {
            nombre: "Ruta de Motociclistas por la Costa Este",
            fecha: "10 de marzo de 2024",
            lugar: "Miami, Estados Unidos",
            image: "src/assets/ForoMotos/Encuentro10.jpg"
        }
      ],
      topics: [],
      newTopic: {
        title: '',
        content: ''
      },
      newPost: {
        problem: '',
        brand: '',
        date: ''
      }
    }
  },
  methods: {
    submitTopic() {
      // Agregar el nuevo tema a la lista de temas
      this.topics.push({
        title: this.newTopic.title,
        content: this.newTopic.content
      });
      // Limpiar el formulario después de agregar el tema
      this.newTopic.title = '';
      this.newTopic.content = '';
    },
    submitPost() {
      // Aquí puedes enviar el nuevo post a tu servidor o realizar otras operaciones necesarias
      // Por ahora, simplemente agregaremos el nuevo post a algún arreglo de posts
      // Este arreglo puede ser una propiedad "posts" en los datos si lo necesitas
      console.log("Post enviado:", this.newPost);
      // Limpiar el formulario después de enviar el post
      this.newPost.problem = '';
      this.newPost.brand = '';
      this.newPost.date = '';
    }
  }
};
</script>

<style scoped>
#app{
  margin-bottom: 70px;
  margin-top: 110px;
  background-image: url('src/assets/ForoMotos/motoMarc.jpeg');
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh; /* Esto asegura que el fondo ocupe toda la altura de la ventana */
}

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


#moto-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.moto, .modelo, .encuentro, .evento, .chatforo{
  background-color: #e9eeed;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  margin: 10px;
  padding: 20px;
  width: 370px;
  transition: transform 0.3s ease;
}


.moto h2, .modelo h2, .encuentro h2, .evento h2 {
  margin-top: 10px;
}

.moto p, .modelo p, .encuentro p, .evento p {
  margin: 10px 0;
}

.moto:hover, .modelo:hover, .encuentro:hover, .evento:hover, .chatForo:hover {
  transform: scale(1.2);
}

figcaption {
  display:none; 
  transition: all .5s;
}

.moto:hover figcaption, .modelo:hover figcaption, .encuentro:hover figcaption, .evento:hover figcaption, .chatForo:hover figcaption {
  display:block;
  transition: all .5s;
}

.zoom {
  transition: transform 0.3s ease;
   width: 100%;
  border-radius: 5px;
}

.zoom:hover {
  transform: scale(1.2);
}

.chat-icon {
  width: 10%;
  height: 10%;
  margin-top: 10px;
}

.centrar {
  text-align: center;
}

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

.moto img,
.modelo img,
.encuentro img,
.evento img,
.chatForo img,
#forum1 img {
  display: block; /* Para evitar problemas de alineación */
  margin: 0 auto; /* Centrar la imagen horizontalmente */
  width: 100%; /* Para asegurar que la imagen ocupe todo el ancho disponible */
  height: auto; /* Para mantener la proporción de aspecto */
}
</style>
