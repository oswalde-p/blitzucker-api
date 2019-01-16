<script>
import TypeSelector from './type-selector'
import ValueListItem from './value-list-item'

const moment = require('moment')

const axios = require('axios')

export default {
  name: 'NewEntry',
  components: {
    TypeSelector,
    ValueListItem
  },
  props: {
    entry: { type: Object, required: false }
  },
  data() {
    return {
      favourites: ['bgl', 'novo', 'lantus', 'perindopril'], // TODO: pass these as prop based on actual prefs
      activeCategory: null,
      enteredData: [],
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
    if (this.entry) {
      this.dateTime = new Date(this.entry.time)
      this.enteredData = [this.entry]
    } else {
      this.dateTime = new Date()
    }
  },
  methods: {
    submitAndExit() {
      /* eslint-disable */
      const api = axios.create({ baseURL: 'http://localhost:3001/api' }); //eslint-disable-line

    const toSend = this.enteredData.filter( e => e.value).map( entry => {
      entry.time = this.dateTime
      return entry
    })

      if (toSend.length > 0) {
        api.post('/users/history/add', {email:this.email, data: toSend})
      }
      // navigate back to overview
      this.$router.push('overview')
    },
    updateActiveCategory(active){
      this.activeCategory = active
    },
    addData(category) {
      const entryObj = {
        subtype: category,
        type: this.$store.state.subtypeDetails[category].parent,
        units: this.$store.state.subtypeDetails[category].units
      }
      this.enteredData.push(entryObj)
    },
    cancel() {
      this.$router.push('overview')
    }
  },
};
</script>

<template lang="pug">
  section
    router-link( to='/overview') X
    .title
      span.date( :click="editDateMode=true") {{ date }}
      span.time(:click = "editTimeMode=true") {{ time }}
    ul#dataList
      ValueListItem(v-for="entry of enteredData" :key="entry.subtype" :entry="entry" )
    TypeSelector(:favourites="favourites" v-on:add-new="addData")
    .floating-action-button(@click="submitAndExit") &#10003;
</template>

<style lang="scss" scoped>
@import '../../style/_common.scss';
@import '../../style/_colors.scss';

html {
  width: 100%;
  height: 100%;
}

section {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.title {
  border-bottom: 2px solid $grey;
  background-color: $primaryDark;
  color: white;
  font-size: 2rem;
  padding: 10px;
}

.time {
  float: right;
}

.cancel {
  font-size: 2rem;
}

#dataList {
  padding: 0;
}
.type-selector {
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
}


</style>

