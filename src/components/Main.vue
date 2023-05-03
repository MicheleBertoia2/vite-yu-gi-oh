
<script>
import TotalResult from "./partials/TotalResult.vue";
import CardsContainer from "./partials/CardsContainer.vue";
import {store} from "../data/store";
export default {
  name: "Main",
  components: {
    TotalResult,
    CardsContainer,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    evento(){
      this.$emit("altroEvento")
    }
  }
  
}
</script>

<template>
  <div class="mb-main pb-3">
    <div class="input-field container">
      <select
        name="archetype"
        id="archetype"
        v-model="store.frameTypeStr"
        @change="evento">

        <option value="">Select Type</option>
        <option
          v-for="(type, index) in store.frameTypeList" :key="index"
          :value="type">{{ type }}</option>

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