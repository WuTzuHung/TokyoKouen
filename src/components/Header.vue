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
  <header class="headerShow">
    <RouterLink to="/weather" class="brand">東京公園・天氣地圖</RouterLink>
    <nav class="nav">
      <RouterLink to="/weather" class="a" :class="{'css': this.white === 2}">天氣</RouterLink>
      <RouterLink to="/public" class="a" :class="{'css': this.white === 6}">公園與公共設施</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.headerShow {
  width: 100%;
  padding: 1rem 4%;
  background-color: #1f3d35;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
}

.brand {
  font-size: clamp(1.15rem, 2.4vw, 1.6rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-decoration: none;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.a {
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  text-decoration: none;
  color: #d9e6df;
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: background-color 0.25s, color 0.25s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
    color: #ffffff;
  }
}

.css {
  background-color: #e07a5f;
  border-color: #e07a5f;
  color: #ffffff;

  &:hover {
    background-color: #e07a5f;
  }
}

@media (max-width: 576px) {
  .headerShow {
    justify-content: center;
    text-align: center;
  }

  .nav {
    justify-content: center;
  }
}
</style>
