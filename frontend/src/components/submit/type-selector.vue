<script>
import IconSquare from '../icon-square';

export default {
  name: 'TypeSelector',
  data() {
    return {
      favourites: ['bgl', 'novo', 'lantus', 'perindopril'], // TODO: pass these as prop based on actual prefs
      activeCategory: null,
    };
  },
  components: {
    IconSquare,
  },
  created() {
    this.activeCategory = this.favourites[0];
    this.$emit('update-active', this.activeCategory);
  },
  methods: {
    updateActiveCategory(newCategory) {
      this.activeCategory = newCategory;
      this.$emit('update-active', newCategory);
    },
  },
};

</script>

<template lang="pug">
  div
    ul
      li(v-for="category in favourites" @click="updateActiveCategory(category)" v-bind:class="{active: category===activeCategory}")
        IconSquare(v-bind:name="category" :size="30")
</template>

<style lang="scss" scoped>

@import '../../style/_colors.scss';
div {
  text-align: center;
  position: relative;
}
ul {
  width: 100%;
  list-style-type: none;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 0;
}

li {
  display: inline-block;
  border: 1.5px solid rgb(207, 207, 207);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 0 0.5rem;
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
