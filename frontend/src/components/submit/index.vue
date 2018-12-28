<script>
import TypeSelector from './type-selector';

export default {
  name: 'NewEntry',
  components: {
    TypeSelector,
  },
};
</script>

<template lang="pug">
  section
    TypeSelector.type-selector
    .floating-action-button
      router-link( to='/overview')  &#10003;
</template>

<style lang="scss" scoped>
@import '../../style/_common.scss';
@import '../../style/_colors.scss';

section {
  height: 100%;
  width: 100%;
}
.type-selector {
  width: 100%;
  height: 20%;
  border-bottom: 2px solid $primaryDark;
}

</style>

