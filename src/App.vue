
<script>
import axios from "axios";

import Header from "./components/Header.vue";
import CardsContainer from "./components/CardsContainer.vue";

import {store} from "./data/store";

export default {
  name: "App",
  components : {
    Header,
    CardsContainer,
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
          console.log(result.data);
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
  <CardsContainer />
</template>

<style lang="scss">
  @use './scss/main.scss';
  @import "bootstrap/scss/bootstrap.scss";

</style>