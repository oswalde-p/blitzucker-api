<script>
import TypeSelector from './type-selector'
import FormPart from './form-part'

const moment = require('moment')

const axios = require('axios')

export default {
  name: 'NewEntry',
  components: {
    TypeSelector,
    FormPart
  },
  data() {
    return {
      favourites: ['bgl', 'novo', 'lantus', 'perindopril'], // TODO: pass these as prop based on actual prefs
      activeCategory: null,
      enteredData: {},
      email: 'test-user@test.com', // TODO: fix this,
      dateTime: moment(),
      editDateMode: false,
      editTimeMode: false
    }
  },
  computed: {
    time() {
      return moment(this.dateTime).format('h:mma')
    },
    date() {
      return moment(this.dateTime).format('ddd, Do MMM')
    }
  },
  created() {
    this.favourites.forEach(e => this.enteredData[e] = {}) // eslint-disable-line no-return-assign
    this.dateTime = new Date()
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
      let x = new Date()
      x.get
    }
  },
};
</script>

<template lang="pug">
  section
    span.cancel(:click="cancel") x
    .title
      span.date( :click="editDateMode=true") {{ date }}
      span.time(:click = "editTimeMode=true") {{ time }}
    .floating-action-button(@click="submitAndExit") &#10003;
</template>

<style lang="scss" scoped>
@import '../../style/_common.scss';
@import '../../style/_colors.scss';

section {
  height: 100%;
  width: 100%;
}

.title {
  border-bottom: 2px solid black;
  font-size: 2rem;
  padding: 10px;
}

.time {
  float: right;
}

.cancel {
  font-size: 2rem;
}


</style>

