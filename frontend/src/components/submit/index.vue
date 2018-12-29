<script>
import TypeSelector from './type-selector';
import FormPart from './form-part';

const moment = require('moment');

const axios = require('axios');

export default {
  name: 'NewEntry',
  components: {
    TypeSelector,
    FormPart,
  },
  data() {
    return {
      favourites: ['bgl', 'novo', 'lantus', 'perindopril'], // TODO: pass these as prop based on actual prefs
      activeCategory: null,
      enteredData: {},
      email: 'example2@test.com', // TODO: fix this,
    };
  },
  created() {
    this.favourites.forEach(e => this.enteredData[e] = {}); // eslint-disable-line no-return-assign
  },
  methods: {
    submitAndExit() {
      /* eslint-disable */
      const api = axios.create({ baseURL: 'http://localhost:3001/api' }); //eslint-disable-line

      let toSend = []
      const subtypes = Object.keys(this.enteredData)
      subtypes.forEach(subtype => toSend.push(this.eventObjectAdaptor(subtype, this.enteredData[subtype])))

      toSend = toSend.filter(e => e != null) // don't want to send empty objects
      if (toSend.length > 0) {
        api.post('/users/history/add', {email:this.email, data: toSend})
      }
      // navigate back to overview
      this.$router.push('overview')
    },
    eventObjectAdaptor(subtype, data) {
      if (!(data.value || data.comment)){
        return null
      }
      let obj = {}
      obj.type = this.$store.state.subtypeDetails[subtype].parent
      obj.subtype = subtype
      obj.value = data.value
      obj.comment = data.comment
      obj.units = this.$store.state.subtypeDetails[subtype].units
      obj.time = this.combineDateTime(data.date, data.time)
      return obj
    },
    combineDateTime(date, time) {
      return moment(date+'T'+time, 'YYYY-MM-DDTHH:mm', true)
    },
    updateActiveCategory(active){
      this.activeCategory = active;
    }
  },
};
</script>

<template lang="pug">
  section
    TypeSelector.type-selector(:favourites="favourites" v-on:update-active="activeCategory = $event" )
    form
      FormPart(v-for="category in favourites" :key="category" :ref="category" :category="category" :values="enteredData[category]" v-bind:class="{active: category===activeCategory}")
    .floating-action-button(@click="submitAndExit") &#10003;
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

.form-part {
  display: none;

}

.active {
  display: block;
}

</style>

