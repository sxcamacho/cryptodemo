<template>
    <img class="logo" :src="currencyImage"/>
</template>

<script>
export default {
  props: ["currencyId", "size"],
  computed: {
    currencyImage() {
      return `https://s2.coinmarketcap.com/static/img/coins/${this.size}/${
        this.currencyId
      }.png`;
    }
  }
};
</script>

