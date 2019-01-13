<script>

export default {
  name: 'ValueListItem',
  props: {
    entry: { type: Object, required: true }
  }
}
</script>

<template lang="pug">
li
  span.name {{ entry.subtype }}
  input(type="number" v-model="entry.value")
  span.units {{ entry.units }}
</template>

<style lang="scss" scoped>
li {
  list-style-type: none;
}

.units {
  float: right;
}

</style>

