<template>
    <img class="logo" :src="getCurrencyIcon(currencyId)"/>
</template>

<script>
export default {
  props: ["currencyId"],
  methods: {
    getCurrencyIcon(currencyId) {
      return `https://s2.coinmarketcap.com/static/img/coins/128x128/${currencyId}.png`;
    }
  }
};
</script>

