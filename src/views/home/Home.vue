<template>
  <div>
    首页
    <router-link :to="{path: '/category', query: {name: 'aaa', age: 18}}">dadadff</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    console.log(this.$route.query)
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>