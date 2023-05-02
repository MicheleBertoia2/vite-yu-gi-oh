
<script>
import Card from "./Card.vue";
import {store} from "../../data/store"
export default {
  name: "CardsContainer",
  components: {
    Card,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div class="cards-container d-flex flex-wrap ">
    <Card
      v-for="card in store.cardsDisplayed"
      :key="card.id" 
      :cardObj="card"/>
   
  </div>
</template>

<style lang="scss" scoped>
  .cards-container{
    justify-content: space-between;
  }
</style>