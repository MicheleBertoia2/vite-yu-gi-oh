
<script>
import TotalResult from "./partials/TotalResult.vue";
import CardsContainer from "./partials/CardsContainer.vue";
export default {
  name: "Main",
  components: {
    TotalResult,
    CardsContainer,
  }
}
</script>

<template>
  <div class="mb-main">
    <div class="input-field container">
      <select name="archetype" id="archetype">
        <option value="Blue-Eyes">Blue-Eyes</option>
      </select>
    </div>
    <div class="container mb-container h-100 p-5">
      <TotalResult />
      <CardsContainer />
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .mb-main{
    background-color:#d48f38;
    .input-field{
      padding: 20px;
      select{
        width: 150px;
      }
    }
    .mb-container{
      background-color: white;
      
    }
  }
</style>