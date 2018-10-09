<template>
  <div>
    <h2>Total of Cryptocurrencies: {{currencies.length}}</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-6" v-for="currency in currencies" :key="currency.id">
        <currency :currency="currency" />
      </div>
    </div>
  </div>
</template>

<script>
import Currency from "./Currency";

export default {
  components: {
    currency: Currency
  },
  methods: {},
  props: ["currencies"]
};
</script>

<style scoped>
h2 {
  padding: 10px;
}
</style>
