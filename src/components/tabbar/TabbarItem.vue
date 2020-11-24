<template>
    <div class="tab-bar-item" @click="itemClick">
      <slot name="item-icon"></slot>
      <div :style="activeClass">
        <slot name="item-text" ></slot>
      </div>
      <slot name="item-icon-active" :style="activeClass"></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) != -1
    },
    activeClass() {
      return this.isActive ? {color: this.activeColor } : {}
    }
  },
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      // console.log(this.link)
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}


</style>