<script>
import TypeSelector from './type-selector';
import NewEntryForm from './form';

export default {
  name: 'NewEntry',
  components: {
    TypeSelector,
    NewEntryForm,
  },
  data() {
    return {
      active: null,
    };
  },
};
</script>

<template lang="pug">
  section
    TypeSelector.type-selector(v-on:update-active="active = $event")
    NewEntryForm( :active="this.active")
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

