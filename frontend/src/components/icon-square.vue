<script>
export default {
  name: 'IconSquare',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      default: 17,
    },
  },
  computed: {
    ref() {
      return `static/svg-defs.svg#${this.name}`;
    },
  },
};

</script>

<template lang="pug">
  svg(v-bind:width="size" v-bind:height="size")
    use(v-bind:xlink:href="''+ref")
</template>
