<script>
import HistoryListItem from './history-list-item';

export default {
  name: 'HistoryList',
  components: {
    HistoryListItem,
  },
  data() {
    return {
      currentDate: null,
    };
  },
  props: {
    history: {
      type: Array,
      required: true,
    },
  },
  methods: {
    dateChanged(timeStr) {
      // debugger // eslint-disable-line
      const date = timeStr.slice(0, 10);
      if (!this.currentDate || date !== this.currentDate) {
        this.currentDate = date;
        return true;
      }
      return false;
    },
  },
};
</script>

<template lang='pug'>
  #history-list
    ul
      li(v-for='event in history')
       HistoryListItem(:event='event' :date='dateChanged(event.time)')
</template>

<style  lang="scss" scoped>
@import '../../style/_colors.scss';
ul {
  list-style-type: none;
  padding: 0;
  li {
    border-bottom: 1px solid $primaryDark;
  }
}
</style>
