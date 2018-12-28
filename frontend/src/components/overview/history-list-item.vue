<script>
  export default {
    name: 'HistoryListItem',
    data() {
      return {};
    },
    props: {
      event,
    },
  };
</script>

<template lang='pug'>
  li.log-item-container
    span.time {{ event.time.slice(11,16)}}
    span.category {{ event.subtype }}
    span.value {{ event.value }}
</template>

<style lang='scss' scoped>
@import '../../style/_colors.scss';

.log-item-container {
  padding: 2rem;
}

.time {
  float: left;
}

.value {
  float: right;
}
</style>
