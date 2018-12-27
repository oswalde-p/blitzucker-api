<script>
import HistoryChart from './history-chart';
import HistoryList from './history-list';

const axios = require('axios');

export default {
  name: 'Overview',
  components: {
    HistoryChart,
    HistoryList,
  },
  data() {
    return {
      history: [],
      email: 'example2@test.com', // TODO: fix this,
      apiInstance: axios.create({
        baseURL: 'http://localhost:3001/api',
      }),
    };
  },
  async created() {
    this.history = await this.fetchHistory(this.email);
  },
  methods: {
    async fetchHistory(email) {
      const response = await this.apiInstance.post('/users/history', { email });
      return response.data;
    },
  },
};
</script>

<template lang='pug'>
  #overview
    history-chart
    history-list(:history='history')
</template>

<style>

#overview {
  width: 100%;
  height: 100%;
}

#history-chart {
  width: 100%;
  height: 40%;
}
</style>
