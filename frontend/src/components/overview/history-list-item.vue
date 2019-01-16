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
    entry: { required: true }
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
    router-link( :to='{name: "EditEntry", params: { entry: entry }}')
      IconSquare.edit-icon(name='edit', :size='18')
    span.time {{ getLocalTime(entry.time)}}
    span.value {{ entry.value }}
      IconSquare.icon(:name='entry.subtype', :size='20')
</template>

<style lang='scss' scoped>
@import '../../style/_colors.scss';

.log-item-container {
  padding: 2rem;
  font-size: 1.5rem;
}

.time {
  float: left;
}

router-link {
  min-width: 50px;
}

.edit-icon {
  float: left;
  margin-right: 1rem;
}
.value {
  float: right;
  .icon {
    float: right;
  }
}
</style>
