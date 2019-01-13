<script>

export default {
  name: 'ValueListItem',
  props: {
    entry: { type: Object, required: true }
  },
  created() {
    this.$nextTick(() => this.$refs.input.focus())
  }
}
</script>

<template lang="pug">
li
  span.name {{ entry.subtype }}
  input(type="number" ref="input" v-model="entry.value")
  span.units {{ entry.units }}
</template>

<style lang="scss" scoped>
@import '../../style/_colors.scss';

li {
  list-style-type: none;
  padding: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid $pink;
  line-height: 2.2rem;
}

.name {
  text-transform: uppercase;
}

input {
  border: .5px solid $grey;
  width: 3rem;
  height: 2.2rem;
  text-align: center;
  border-radius: 4px;
  font-size: 1.5rem;
  position: absolute;
  left: 65%;
}

.units {
  position: absolute;
  left: 80%;
}

</style>

