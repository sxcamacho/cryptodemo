<template>
    <div>
      <search :criteria="searchCriteria" @change="searchCriteriaChanged($event)" />
      <div class="page-limit-box">
        <span>Page Limit:</span>
        <select v-model="pageLimit">
          <option v-for="index in 10" :key="index" :value="index * 10">
            {{index * 10}}
          </option>
        </select>
      </div>
      <button
        v-if="!searchCriteria && !loading && hasMoreCurrencies"
        class="btn btn-default btn-lg btn-block"
        @click="showMore"
      >
        Load More
      </button>
      <div v-if="loading" class="loader-box">
        <loader />
      </div>
      <div class="list-box" v-if="!loading && filteredData">
        <currency-list :currencies="filteredData" :total="totalCurrencies"/>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import CurrencyList from "../components/CurrencyList";
import SearchBox from "../components/SearchBox.vue";
import Loader from "../components/Loader";

export default {
  components: {
    currencyList: CurrencyList,
    search: SearchBox,
    loader: Loader
  },
  data() {
    return {
      loading: false,
      marketData: {
        data: [],
        metadata: {}
      },
      searchCriteria: "",
      pageLimit: 10,
      currentPage: 0
    };
  },
  methods: {
    searchCriteriaChanged(criteria) {
      this.searchCriteria = criteria;
    },
    showMore() {
      if (
        this.marketData.data.length <
        this.marketData.metadata.num_cryptocurrencies
      ) {
        this.currentPage += 1;
        this.loadCurrencies();
      }
    },
    loadCurrencies() {
      this.loading = true;
      let self = this;
      /**
       * Note: it is strongly recommended to use id to sort
       * if you are going to page through all available results since
       * id is the only guaranteed classification option to return a consistent order.
       */
      axios
        .get(
          `https://api.coinmarketcap.com/v2/ticker/?start=${
            this.nextPageFrom
          }&limit=${this.pageLimit}&sort=id&structure=array`
        )
        .then(({ data: { data, metadata } }) => {
          self.marketData.data.unshift(...data);
          self.marketData.metadata = metadata;
          self.loading = false;
        });
    }
  },
  computed: {
    totalCurrencies() {
      return this.searchCriteria
        ? this.filteredData.length
        : this.marketData.metadata.num_cryptocurrencies;
    },
    hasMoreCurrencies() {
      return (
        this.marketData.data &&
        this.marketData.data.length <
          this.marketData.metadata.num_cryptocurrencies
      );
    },
    nextPageFrom: function() {
      return this.pageLimit * this.currentPage + 1;
    },
    filteredData: function() {
      let self = this;
      if (this.searchCriteria) {
        return this.marketData.data.filter(function(currency) {
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
        return this.marketData.data;
      }
    }
  },
  watch: {
    pageLimit: function() {
      this.marketData = {
        data: [],
        metadata: {}
      };
      this.currentPage = 0;
      this.loadCurrencies();
    }
  },
  mounted() {
    this.loadCurrencies();
  }
};
</script>

<style scoped>
.list-box {
  max-width: 900px;
  margin: 0 auto;
}
.loader-box {
  margin-top: 100px;
}
.btn-default {
  padding: 30px;
  width: calc(100% - 20px);
  margin: 40px auto;
}
.page-limit-box {
  padding: 10px;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
}
.page-limit-box select {
  font-size: 30px;
  padding: 20px;
  width: 20%;
  min-width: 200px;
  border: 1px solid #eee;
  background-color: #fff;
}
.page-limit-box span {
  font-size: 30px;
  margin-right: 20px;
}
</style>


