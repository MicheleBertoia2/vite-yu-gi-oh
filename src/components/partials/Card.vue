
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
  <div class="mb-card mb-3">
    <!-- <img :src="cardImage" :alt="cardName"> -->
    <img src="https://images.ygoprodeck.com/images/cards/50371210.jpg" alt="">
    <div class="mb-text text-center">
      <p>Beacon of whitedddsssssaaaaaaaaa</p>
      <!-- <span>{{ cardName }}</span> -->
    </div>
    <div class="archetype text-center">
      <span class="my-auto">blue eyes</span>
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
  .mb-text{
    background-color: #d48f38;
    height: 100px;
    padding: 10px;
    p{
      word-break: break-all;
      color: white;
    }
  }
  .archetype{
    height: 25px;
    background-color: #d48f38;
  }

  .mb-text,
  .archetype{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>