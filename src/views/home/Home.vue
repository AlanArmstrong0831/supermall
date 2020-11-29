<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    
    <scroll class="content">
          <swiper>
            <swiper-item v-for="(item,index) in banners" :key="index">
              <a :href="item.link">
                <img :src="item.image" alt="">
              </a>
            </swiper-item>
          </swiper>
          
          <recommend-view :recommends="recommends"></recommend-view>
          <feature-view></feature-view>
          <tab-control :titles='titles' class="tab-control" @tabClick="tabClick"></tab-control>
          <!-- <goods-list :goods = goods[currentType].list></goods-list> -->
          <ul>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
          </ul>
    </scroll>
    
   
  </div>
</template>

<script>

import {getHomeMultidata, getHomeGoods} from '../../network/home'

import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {Swiper, SwiperItem} from '../../components/swiper/index'
import NavBar from '../../components/navbar/NavBar'
import TabControl from '../../components/tabControl/TabControl'
import GoodsList from '../../components/goods/GoodsList'
import Scroll from '../../components/scroll/Scroll'



export default {
  components: { NavBar, Swiper, SwiperItem, RecommendView, FeatureView, TabControl, GoodsList, RecommendView,
  Scroll },
  data () {
    return {
      banners: [],
      recommends: [],
      titles: ['精选','评论','参数'],
      goods: {
        'pop': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        }
      },
      currentType: 'pop'
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })

    getHomeGoods().then(res => {
      console.log(res)
    })
  },
  methods: {
    tabClick(index) {
      switch(index) {
        case 0: 
        this.currentType = 'pop'
        break
        case 1: 
        this.currentType = 'new'
        break
        this.currentType = 'sell'
      }
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  height: 200px;
  background-color: var(--color-tint);
}
</style>