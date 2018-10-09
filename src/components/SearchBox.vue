<template>
  <div class="search-box">
      <input type="text" v-model="interalCriteria" placeholder="Search currency..." />
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: ["criteria"],
  data() {
    return {
      interalCriteria: this.criteria
    };
  },
  methods: {
    search: _.debounce(function() {
      this.$emit("change", this.interalCriteria);
    }, 500)
  },
  watch: {
    interalCriteria: function() {
      this.search();
    }
  }
};
</script>

<style scoped>
.search-box {
  padding: 10px;
}
.search-box input {
  font-size: 30px;
  padding: 20px;
  width: 100%;
  border: 1px solid #eee;
}
</style>
