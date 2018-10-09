<template>
  <router-link tag="div" class="currency-box" :to="{ name: 'Detail', params: { id: currency.id }}">
    <div class="title">{{currency.name}} ({{currency.symbol}})</div>
    <currency-logo :currencyId="currency.id" :size="'64x64'"/>
  </router-link>
</template>

<script>
import CurrencyLogo from "./CurrencyLogo";

export default {
  props: ["currency"],
  components: {
    CurrencyLogo
  }
};
</script>

<style scoped>
.currency-box {
  height: 250px;
  padding: 30px;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
}

.logo {
  margin-top: 20px;
}
</style>
