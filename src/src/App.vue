<template>
  <div id="app" :class="this.$i18n.locale">

    <navbar></navbar>
    <div class="columns is-centered">
    <div class="column is-three-quarters">

    <router-view/>
    </div>
    </div>

  </div>
</template>

<script>

import navbar from './components/layout/navbar'
import {mapState} from "vuex";

export default {

    components: {
        navbar
    },
    created() {
        this.$store.commit('GET_CUR')
    },
    methods: {
    }
};
</script>


<style lang="sass">
  @import "~bulma"
  @import './assets/scss/base'
</style>