<script>
  export default {
    name: 'HistoryListItem',
    data() {
      return {};
    },
    props: {
      event,
      date: {
        type: Boolean,
        required: true,
      },
    },
  };
</script>

<template lang='pug'>
  .log-item-container
    .dateSeperator(v-if="date") {{ event.time }}
    span.category {{ event.subtype }}
    span.value {{ event.value }}
</template>

<style>

.log-item-container {

}
</style>
