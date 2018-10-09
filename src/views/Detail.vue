<template>
  <div>
    <h1>Currency {{currencyId}}</h1>
    <currency-logo :currencyId="currencyId" />
  </div>
</template>

<script>
import CurrencyLogo from "../components/CurrencyLogo.vue";

export default {
  components: {
    CurrencyLogo
  },
  data() {
    return {
      currencyId: 0
    };
  },
  beforeMount() {
    this.currencyId = this.$route.params.id;
  },
  mounted() {}
};
</script>

<style scoped>
</style>
