<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    
    
  </div>
</template>

<script>
import NavBar from '../../components/navbar/NavBar'


export default {
  components: { NavBar },
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
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>