
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
          type: store.frameTypeStr,
         } 
      })
        .then(result =>{
          store.cardsDisplayed = result.data.data
          store.cardsDisplayed.forEach(element => {
            if(!store.frameTypeList.includes(element.type)){
              store.frameTypeList.push(element.type)
            }
          });
          console.log(store.frameTypeList);
        })
    },
    
    startSearch(){
    store.apiUrl = store.basicApiUrl;
    store.cardsDisplayed = [];
    this.getApi()
    
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
  <Main @altroEvento="startSearch()" />
</template>

<style lang="scss">
  @use './scss/main.scss';
  @import "bootstrap/scss/bootstrap.scss";

</style>