
<script>
export default {
  name: "Card",
  props:{
    cardName: String,
    cardImage: String,
    cardArchetype: String
  }
}
</script>

<template>
  <div class="mb-card ">
    <!-- <img :src="cardImage" :alt="cardName"> -->
    <img src="https://images.ygoprodeck.com/images/cards/50371210.jpg" alt="">
    <div class="text">
      <span>Beacon of white</span>
      <!-- <span>{{ cardName }}</span> -->
    </div>
    <div class="archetype">
      <span>blue eyes</span>
      <!-- <span>{{ cardArchetype }}</span> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mb-card{
  width: 18%;
  img{
    height: 250px;
    width: 100%;
  }
}
</style>