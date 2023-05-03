import {reactive} from "vue";

export const store = reactive({
  basicApiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  apiUrl: null, 
  cardsDisplayed: [], 
  frameTypeList: [],
  frameTypeStr: "Effect Monster"
})