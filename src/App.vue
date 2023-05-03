
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
      axios.get(store.apiUrl,{
        params: {
          num: 600,
          offset: 0,
          frameType: ""
        }
      })
        .then(result =>{
          store.cardsDisplayed = result.data.data
          store.cardsDisplayed.forEach(element => {
            if(!store.frameTypeList.includes(element.frameType)){
              store.frameTypeList.push(element.frameType)
            }
          });
          console.log(store.frameTypeList);
        })
    }
  },
  mounted(){
    store.apiUrl = store.basicApiUrl
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