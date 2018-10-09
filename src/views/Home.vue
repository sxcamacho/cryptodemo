<template>
    <div>
      <search :criteria="searchCriteria" @change="searchCriteriaChanged($event)" />
      <loader v-if="loading" />
      <div class="list-box" v-if="!loading && filteredData">
        <currency-list :currencies="filteredData" />
      </div>
    </div>
</template>

<script>
import axios from "axios";
import CurrencyList from "../components/CurrencyList";
import SearchBox from "../components/SearchBox.vue";
import Loader from "../components/Loader";

export default {
  data() {
    return {
      loading: true,
      currenciesData: [],
      searchCriteria: ""
    };
  },
  components: {
    currencyList: CurrencyList,
    search: SearchBox,
    loader: Loader
  },
  methods: {
    searchCriteriaChanged(criteria) {
      this.searchCriteria = criteria;
    }
  },
  computed: {
    filteredData: function() {
      let self = this;
      if (this.searchCriteria) {
        return this.currenciesData.filter(function(currency) {
          return (
            currency.name
              .toLowerCase()
              .includes(self.searchCriteria.toLowerCase()) ||
            currency.symbol
              .toLowerCase()
              .includes(self.searchCriteria.toLowerCase())
          );
        });
      } else {
        return this.currenciesData;
      }
    }
  },
  mounted() {
    let self = this;
    axios.get("https://api.coinmarketcap.com/v2/listings/").then(response => {
      self.currenciesData = response.data.data;
      self.loading = false;
    });
  }
};
</script>

<style>
.list-box {
  max-width: 900px;
  margin: 0 auto;
}
</style>


