
<script>
import Card from "./Card.vue";
export default {
  name: "CardsContainer",
  components: {
    Card,
  }
}
</script>

<template>
  <div class="cards-container d-flex flex-wrap ">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style lang="scss" scoped>
  .cards-container{
    justify-content: space-between;
  }
</style>