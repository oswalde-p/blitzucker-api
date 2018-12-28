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
    history: { // TODO: filter history events to display based on user preferences
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
    ul(v-if='history && history.length > 0')
      template(v-for='event in history')
        li.dateSeperator(v-if='firstTimes.includes(event.time)') {{ event.time.slice(0,10) }}
        HistoryListItem(:event='event')
    div(v-else) No records to display
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
