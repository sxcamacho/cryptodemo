<template>
    <div class="app-content">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
}
</style>
