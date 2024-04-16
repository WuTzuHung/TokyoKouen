<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState,mapActions } from "pinia";
import data from '../stores/abc'
export default {
  data() {
    return {};
  },
  components: {
    RouterLink,
  },
  computed:{
        ...mapState(data, ["white"])
    }
};
</script>

<template>
  <div class="headerShow">
    <p class="b"><RouterLink to="/" class="a" :class="{'css': this.white === 1}">首頁</RouterLink></p>
    <p class="b"><RouterLink to="/weather" class="a" :class="{'css': this.white === 2}">天氣</RouterLink></p>
    <p class="b"><RouterLink to="/WenHua" class="a" :class="{'css': this.white === 5}">文化</RouterLink></p>
    <p class="b"><RouterLink to="/public" class="a" :class="{'css': this.white === 6}">公園與公共設施</RouterLink></p>
    <p class="b"><RouterLink to="/sport" class="a" :class="{'css': this.white === 3}">體育設施</RouterLink></p>
  </div>
</template>

<style scoped lang="scss">
.headerShow {
  widows: 100%;
  height: 100%;
  background-color: #c2834b;
  border-radius: 2px;
  display: flex;
  justify-content: space-around;
  .a {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 2em;
  line-height: 2em;
  text-decoration: none;
  color: bisque;
  transition: 0.5s;
  &:hover{
    color: rgb(78, 90, 155);
  }
}
}
.b{
  font-size: 1.2em;
  line-height: 1.2em;
}

.css{
    background-color: rgb(121, 143, 255);
    color: white;
    border-radius: 5px;
    transition: 0.6s;
}
</style>
