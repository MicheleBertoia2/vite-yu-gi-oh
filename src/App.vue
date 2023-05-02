
<script>
import axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

import {store} from "./data/store";

export default {
  name: "App",
  components : {
    Header,
    Main,
  },
  data(){
    return{
      store,
      archetypeStr: "Blue-Eyes",
      
    }
  },
  methods: {
    getApi(){
      axios.get(store.basicApiUrl + this.archetypeStr)
        .then(result =>{
          store.cardsDisplayed = result.data.data
          console.log(store.cardsDisplayed);
        })
    }
  },
  mounted(){
    this.getApi()
  }
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
  @use './scss/main.scss';
  @import "bootstrap/scss/bootstrap.scss";

</style>