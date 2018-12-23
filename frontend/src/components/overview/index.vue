<script>

import HistoryChart from './history-chart';
import HistoryList from './history-list';

export default {
  name: 'Overview',
  components: {
    HistoryChart,
    HistoryList,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<template lang='pug'>
  #overview
    history-chart
    history-list
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
