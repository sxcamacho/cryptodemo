<template>
    <div class="loader">
        <span v-text="'{{'" />
        <span v-text="'}}'" />
    </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style scoped>
.loader {
  color: #42b983;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 10vh;
  opacity: 0.8;
  text-align: center;
}
.loader span {
  display: inline-block;
  -webkit-animation: pulse 0.4s alternate infinite ease-in-out;
  animation: pulse 0.4s alternate infinite ease-in-out;
}
.loader span:nth-child(odd) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
@-webkit-keyframes pulse {
  to {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.5;
  }
}
@keyframes pulse {
  to {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>
