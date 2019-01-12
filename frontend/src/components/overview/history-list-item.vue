<script>
import IconSquare from '../icon-square'

const moment = require('moment')

export default {
  name: 'HistoryListItem',
  data() {
    return {}
  },
  components: {
    IconSquare
  },
  props: {
    event
  },
  methods: {
    getLocalTime(timeIso) {
      const time = moment(timeIso)
      return time.format('HH:mm')
    }
  }
}
</script>

<template lang='pug'>
  li.log-item-container
    span.time {{ getLocalTime(event.time)}}
    span.value {{ event.value }}
      IconSquare.icon(:name='event.subtype', :size='20')
</template>

<style lang='scss' scoped>
@import '../../style/_colors.scss';

.log-item-container {
  padding: 2rem;
}

.time {
  float: left;
}

.value, .icon {
  float: right;
}
</style>
