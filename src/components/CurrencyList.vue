<template>
  <div>

    <h2 v-if="currencies.length">
      Cryptocurrencies: {{currencies.length}} of {{total}}
    </h2>
    <h2 v-else>No results found</h2>

    <div class="row">
      <div class="col-xs-6 col-sm-3" v-for="currency in currencies" :key="currency.id">
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
  props: ["currencies", "total"]
};
</script>

<style scoped>
h2 {
  padding: 10px;
}
</style>
