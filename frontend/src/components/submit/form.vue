<script>

export default {
  name: 'NewEntryForm',
  props: {
    active: null,
  },
  created() {
  },
};

</script>

<template lang="pug">
  form
    h1 {{ this.$store.state.strings.EN[active] }}
    ul
      li
        label Time
        input#time-input(type="time")
        // TODO: set default value for time

      li(v-if="this.$store.state.eventTypes[active] == 'INSULIN'")
        input(type="number")
        label units
      li(v-if="this.$store.state.eventTypes[active] == 'BGL'")
        input#bglevel(type="number")
        label mmol/l
      li(v-if="this.$store.state.eventTypes[active] == 'PILL'")
        label qty:
        input#pillQty(type="number")
      li
        label Comment:
        input

</template>

