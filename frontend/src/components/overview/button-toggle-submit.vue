<script>
import IconSquare from '../icon-square';

export default {
  name: 'SubmitButton',
  data() {
    return {};
  },
};
</script>

<template lang='pug'>
  li.log-item-container
    span.time {{ event.time.slice(11,16)}}
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
