<script>
import IconSquare from '../icon-square'

export default {
  name: 'TypeSelector',
  data() {
    return {
      activeCategory: null
    }
  },
  props: {
    favourites: {
      required: true
    }
  },
  components: {
    IconSquare
  },
  methods: {
    addNew(category) {
      this.$emit('add-new', category)
    }
  }
}

</script>

<template lang="pug">
  div.type-selector
    ul
      li(v-for="category in favourites" @click="addNew(category)" )
        IconSquare(:name="category" :size="30")
</template>

<style lang="scss" scoped>

@import '../../style/_colors.scss';
@import '../../style/_common.scss';
div {
  overflow: hidden;
}
ul {
  @include on-circle($item-count: 12, $circle-size: 20em, $item-size: 6em, $start-angle: 180);
  margin: 0;
}

li {
  display: inline-block;
  text-align: center;
  border: 1.5px solid rgb(207, 207, 207);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background-color: rgb(207, 207, 207);

  svg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

  }
}

.active {
  border-color: $primaryDark;
}

</style>
