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
  main#overview
    history-chart
    history-list(:history='history')
    .submit-new-button
      router-link( to='/newEntry')  +
</template>

<style lang='scss' scoped>
@import '../../style/_colors.scss';

#overview {
  width: 100%;
  height: 100%;
  margin: 0;
}

#history-chart {
  width: 100%;
  height: 40%;
}

#history-list {
  width: 100%;
  height: 60%;
}

.submit-new-button {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  float: right;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  background-color: $secondary;
  font-size: 3.5rem;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
