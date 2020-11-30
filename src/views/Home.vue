<template>
  <div class="home">
    <h1>Vue 2 + Vuex + TypeScript + TradingView Component</h1>
    <div class="home__main">
      <CryptoItem v-for="(name,i) in cryptocurrencies" :name="name" :key="i"/>
    </div>
    <TradingViewComponent/>
  </div>
</template>

<script>
import store from '../store';
import CryptoItem from "../components/CryptoItem";
import TradingViewComponent from '@/components/TradingViewComponent.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({components: {CryptoItem, TradingViewComponent}})
export default class Home extends Vue {
  cryptocurrencies = ['BTC', 'LTC', 'NMC', 'STC', 'PPC', 'EMC', 'GRC', 'XPM', 'VTC', 'ETH', 'ETC', 'WAVES', 'ZEC', 'BCH']
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.home__main {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
}
</style>
