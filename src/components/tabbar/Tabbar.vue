<template>
  <div id="tab-bar">
    <tab-bar-item link="/home" activeColor='blue'>
        <img src="../../assets/img/tabbar/u=2595323302,3459190699&fm=26&gp=0.png" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor='pink'>
        <img src="../../assets/img/tabbar/u=352804516,398578089&fm=26&gp=0.jpg" alt="" slot="item-icon">
        <div slot="item-text">关于</div>
      </tab-bar-item>
      <tab-bar-item link='/cart' activeColor='yellow'>
        <img src="../../assets/img/tabbar/u=388926471,3241934216&fm=26&gp=0.jpg" alt="" slot="item-icon">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link='/profile'>
        <img src="../../assets/img/tabbar/u=466153629,560522435&fm=26&gp=0.jpg" alt="" slot="item-icon">
        <div slot="item-text">我的</div>
      </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabbarItem'

export default {
  name: 'tabbar',
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1); 

}

</style>