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
  width: 100%;
}

.content{
  width: 100%;
  min-height: 87dvh;
  text-align: center;
  background-color: bisque;
}
</style>
