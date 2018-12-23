<script>
import HistoryListItem from './history-list-item';

export default {
  name: 'HistoryList',
  components: {
    HistoryListItem,
  },
  data() {
    return {};
  },
};
</script>

<template lang='pug'>
  #history-list
    ul
      li history-list-item
</template>

<style>
</style>
