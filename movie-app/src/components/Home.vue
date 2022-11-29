<template>
  <div class="home">
    <div class="feature-card">
      <router-link>
        <img
          class="jojo"
          src="https://i1.sndcdn.com/artworks-000458048490-hsmcny-t500x500.jpg"
        />
        <div class="detail">
          <h3>Jojo Bizzare Adventure</h3>
          <p>
            JoJo's Bizarre Adventure: Stardust Crusaders is the second season of
            the JoJo's Bizarre Adventure anime by David Production, based on the
            JoJo's Bizarre Adventure manga series by Hirohiko Araki.
          </p>
        </div>
      </router-link>

      <form @submit.prevent="searchMovies" class="search-box">
        <input
          type="text"
          v-model="search"
          placeholder="What are you looking for ?"
        />
        <input type="submit" value="Search" />
      </form>
      <div class="movies-list" v-for="(movie, index) in movies" :key="index">
        <router-link class="movie-link" :to="'/movie/' + movie.imdbID">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail-m">
            <p class="y">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");
const movies = ref([]);

const searchMovies = () => {
  if (search.value != undefined) {
    fetch(`http://www.omdbapi.com/?apikey=177ca0a4&s=${search.value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        movies.value = data.Search;
        search.value = "";
      });
  }
};
</script>

<style>
.feature-card {
  height: 400px;
  width: 100%;
}

.detail {
  color: white;
  position: absolute;

  top: 0;

  margin-top: 240px;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.6);
}

.jojo {
  width: 100%;
  height: 300px;
}

img {
  object-fit: cover;
}

.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

.search-box input {
  display: block;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

input[type="text"] {
  width: 100%;
  color: white;
  background-color: #496583;
  font-size: 20px;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: 0.4s;
}

input[type="text"]::placeholder {
  color: rgb(235, 235, 235);
}

input[type="submit"] {
  width: 100%;
  max-width: 300px;
  background-color: #42b883;
  padding: 16px;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  transition: 0.4s;
}

input[type="submit"]:active {
  background-color: #3b8070;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
}

.movie {
  max-width: 50%;
  flex: 1 1 50%;
  padding: 16px 8px;
}

.movie-link {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.porduct-image {
  position: relative;
  display: block;
}

.porduct-image img {
  display: block;
  width: 100%;
  height: 275px;
  object-fit: cover;
}

.porduct-image .type {
  position: absolute;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  bottom: 16px;
  left: 0px;
  text-transform: capitalize;
}
</style>
