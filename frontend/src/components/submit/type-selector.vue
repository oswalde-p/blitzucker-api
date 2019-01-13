<script>
import IconSquare from '../icon-square'

export default {
  name: 'TypeSelector',
  data() {
    return {
      used: {}
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
      if (!this.used[category]) {
        this.toggleUsed(category)
        this.$emit('add-new', category)
      }
    },
    toggleUsed(id) {
      const element = document.getElementById(id)
      element.classList.add('used')
      this.used[id] = true
    }
  }
}

</script>

<template lang="pug">
  div.type-selector
    ul
      li(v-for="category in favourites" @click="addNew(category)" :id="category")
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
  border: 1.5px solid $pink;
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

.used {
  border-color: rgb(207, 207, 207);
  svg {
    fill: rgb(124, 124, 124);;
  }
}

</style>
