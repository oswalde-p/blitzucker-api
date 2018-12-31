<script>

export default {
  name: 'IconSquare',
  data() {
    return {
      svgId: null,
    };
  },
  created() {
    this.svgId = this.$store.state.subtypeDetails[this.name].icon;
  },
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
      return `static/svg-defs.svg#${this.svgId}`;
    },
  },
};

</script>

<template lang="pug">
  svg(v-bind:width="size" v-bind:height="size")
    use(v-bind:xlink:href="''+ref")
</template>
