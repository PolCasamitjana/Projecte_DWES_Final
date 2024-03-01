<template>
  <div class="noticias-container">
    <h1 class="titulo">Noticias del Mundo del Motor</h1>
    <div class="grid-container">
      <div v-for="(noticia, index) in noticias" :key="index" class="noticia">
        <a :href="noticia.url" target="_blank">
          <img :src="noticia.urlToImage" alt="Imagen de la noticia">
          <p>{{ noticia.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      noticias: []
    };
  },
  mounted() {
    this.obtenerNoticias();
  },
  methods: {
    obtenerNoticias() {
      const apiKey = 'b859c655c554429b8628da39fad61294'; // Reemplaza con tu propia clave de API
      const apiUrl = `https://newsapi.org/v2/everything?q=(coches OR motos OR competiciones)&language=es&apiKey=${apiKey}`;

      axios.get(apiUrl)
        .then(response => {
          this.noticias = response.data.articles.map(article => ({
            title: article.title,
            url: article.url,
            urlToImage: article.urlToImage
          })).slice(0, 30); 
        })
        .catch(error => {
          console.error('Error al obtener noticias:', error);
        });
    }
  }
};
</script>


<style scoped>
.noticias-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.titulo {

 font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #000;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.noticia {
  text-decoration: none;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.noticia img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.noticia p {
  margin: 10px;
  font-size: 14px;
  line-height: 1.5;
}
</style>
