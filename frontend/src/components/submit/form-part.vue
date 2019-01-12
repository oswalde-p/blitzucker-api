<script>

export default {
  name: 'FormPart',
  props: {
    category: null,
    values: null,
    time: null,
    date: null
  },
  methods: {
    submit() {
      console.log('yay'); //eslint-disable-line
    }
  }
}

</script>

<template lang="pug">
  .form-part
    h1 {{ this.$store.state.strings.EN[category] }}
    ul
      li
        label Date
        input(type="date" v-model="date")
      li
        label Time
        input(type="time" v-model="time")
        // TODO: set default value for time

      li(v-if="this.$store.state.subtypeDetails[category].parent == 'INSULIN'")
        input(v-model="values.value" type="number")
        label units
      li(v-else-if="this.$store.state.subtypeDetails[category].parent == 'BGL'")
        input(v-model="values.value" type="number")
        label mmol/l
      li(v-else-if="this.$store.state.subtypeDetails[category].parent == 'PILL'")
        label qty:
        input(v-model="values.value" type="number")

      li
        label Comment:
        input(v-model="values.comment")

</template>

