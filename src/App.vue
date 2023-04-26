<template>
  <router-view/>
</template>
<script>
import { mapActions } from 'vuex';
export default{
  methods: {
    ...mapActions([
      'GET_PRODCUTS_FROM_DB'
    ])
  },
  mounted() {
    this.GET_PRODCUTS_FROM_DB()
  }
}
</script>
<style lang="sass">
@import "@/assets/sass/main.sass"
</style>
