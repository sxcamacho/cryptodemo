<template>
  <div v-if="currencyData">
    <div class="row text-center margin-top-60">
      <div class="col-xs-12">
        <currency-logo :currencyId="currencyId" :size="'128x128'"/>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-xs-12">
        <h1>{{currencyData.name}}</h1>
      </div>
      <div class="col-xs-12">
        <h3>{{currencyData.symbol}}</h3>
      </div>
    </div>
    <div class="row margin-top-60">
        <div class="col-xs-12">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <!-- GENERAL -->
                <tr v-for="(value, key, index) in currencyData" :key="`general-${index}`">
                  <template v-if="key !== 'quotes'">
                    <td>{{key | prettyKey}}</td>
                    <td>{{value}}</td>
                  </template>
                </tr>
                <!-- USD -->
                <tr><td colspan="2" class="text-center bg-warning">USD</td></tr>
                <tr v-for="(value, key, index) in currencyData.quotes.USD" :key="`usd-${index}`">
                  <template v-if="key !== 'quotes'">
                    <td>{{key | prettyKey}}</td>
                    <td>{{value}}</td>
                  </template>
                </tr>
                <!-- BTC -->
                <tr><td colspan="2" class="text-center bg-warning">BTC</td></tr>
                <tr v-for="(value, key, index) in currencyData.quotes.BTC" :key="`btc-${index}`">
                  <template v-if="key !== 'quotes'">
                    <td>{{key | prettyKey}}</td>
                    <td>{{value}}</td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>

    <div class="row text-center">
      <div class="col-xs-12">
        <router-link tag="button" class="btn btn-default btn-lg btn-block margin-20-0-100" to="/">
          Back to List
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import CurrencyLogo from "../components/CurrencyLogo.vue";

export default {
  components: {
    CurrencyLogo
  },
  data() {
    return {
      currencyId: 0,
      currencyData: undefined
    };
  },
  filters: {
    prettyKey: value => {
      let result = value.replace(new RegExp("_", "g"), " ");
      return result.replace(/\b\w/g, function(l) {
        return l.toUpperCase();
      });
    }
  },
  beforeMount() {
    this.currencyId = this.$route.params.id;
  },
  mounted() {
    let self = this;
    axios
      .get(
        `https://api.coinmarketcap.com/v2/ticker/${
          this.currencyId
        }/?convert=BTC`
      )
      .then(({ data: { data } }) => {
        self.currencyData = data;
        self.loading = false;
      });
  }
};
</script>

<style scoped>
.margin-top-60 {
  margin-top: 60px;
}
.margin-20-0-100 {
  margin: 20px 0 100px;
}
</style>
