<template>
  <div id="app">
    <header>
      <h1><span class="vue">Vue</span>Movies</h1>
    </header>
    <Home />
    <MovieDetail />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import MovieDetail from "./components/MovieDetail.vue";
export default {
  name: "App",
  props: [],
  data() {
    return {
      KEY: "http://www.omdbapi.com/?i=tt3896198&apikey=177ca0a4",
    };
  },
  methods: {},
  components: {
    Home,
    MovieDetail,
  },
  watch: {},
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

body {
  background-color: #35495e;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #2c3d4e;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: white;
}

.vue {
  color: #42b883;
}
</style>
