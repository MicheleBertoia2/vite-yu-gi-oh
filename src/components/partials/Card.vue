
<script>
export default {
  name: "Card",
  props:{
    cardObj: Object
    
  }
}
</script>

<template>
  <div class="mb-card mb-3">
   <img
      :src="cardObj.card_images[0].image_url"
      :alt="cardObj.name">
    <div class="mb-text text-center">
      <p>{{ cardObj.name }}</p>
    </div>
    <div class="archetype text-center">
      <span>{{ cardObj.archetype }}</span>
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