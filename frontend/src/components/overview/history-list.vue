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
  computed: {
    firstTimes() { // used to determine which events should be preceded by a date seperator
      const times = [];
      let lastSeenDate = '';
      this.history.forEach((e) => {
        if (e.time.slice(0, 10) !== lastSeenDate) {
          times.push(e.time);
          lastSeenDate = e.time.slice(0, 10);
        }
      });
      return times;
    },
  },
};
</script>

<template lang='pug'>
  #history-list
    ul
      template(v-for='event in history')
        li.dateSeperator(v-if='firstTimes.includes(event.time)') {{ event.time.slice(0,10) }}
        HistoryListItem(:event='event')
</template>

<style  lang='scss' scoped>
@import '../../style/_colors.scss';
ul {
  list-style-type: none;
  padding: 0;
}

li {
  border-bottom: 1px solid $primaryDark;
}
.dateSeperator {
  margin: 0;
  color: $white;
  background: $primaryDark;
  text-align: center;
}
</style>
