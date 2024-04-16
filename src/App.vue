<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template class="body">
  <div class="header">
    <Header />
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">

.header{
  margin: 0;
  widows: 100vw;
  height: 13vh;
}

.content{
  width: 100vw;
  height: 110vh;
  text-align: center;
  background-color: bisque;
}
</style>
