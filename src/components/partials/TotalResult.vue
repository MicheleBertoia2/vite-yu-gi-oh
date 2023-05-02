
<script>
import {store} from "../../data/store";
export default {
  name: "TotalResult",
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div>
    <h3>Carte trovate: {{ store.cardsDisplayed.length }} </h3>
  </div>
</template>

<style lang="scss" scoped>
  div{
    background-color: black;
    color: white;
    padding: 10px 5px;
  }
</style>