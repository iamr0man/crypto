<template>
  <div id="app">
    <div class="app__main">
      <CryptoItem @setCrypto="updateGraphic" v-for="(name,i) in cryptocurrencies" :name="name" :key="i"/>
    </div>
    <div class="app__graphic">
      <div id="chart">
        <apexchart v-show="currentCryptoName" ref="realtimeChart" type="candlestick" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CryptoItem from "../components/CryptoItem";
export default {
  name: 'Main',
  components: {
    CryptoItem,
  },
  data() {
    return {
      ccStreamer: null,
      cryptocurrencies: ['BTC', 'LTC', 'NMC', 'STC', 'PPC', 'EMC', 'GRC', 'XPM', 'VTC', 'ETH', 'ETC', 'WAVES', 'ZEC', 'BCH'],
      allSubs: ["24~CCCAGG~BTC~USD~m", "24~CCCAGG~LTC~USD~m", "24~CCCAGG~NMC~USD~m", "24~CCCAGG~STC~USD~m", "24~CCCAGG~PPC~USD~m", "24~CCCAGG~EMC~USD~m", "24~CCCAGG~GRC~USD~m", "24~CCCAGG~XPM~USD~m", "24~CCCAGG~VTC~USD~m", "24~CCCAGG~ETH~USD~m", "24~CCCAGG~ETC~USD~m", "24~CCCAGG~WAVES~USD~m", "24~CCCAGG~ZEC~USD~m", "24~CCCAGG~BCH~USD~m"],
      series: [{
        name: 'candle',
        data: []
      }],
      chartOptions: {
        chart: {
          width: 600,
          height: 450,
          type: 'candlestick',
        },
        title: {
          text: 'CandleStick Chart - Category X-axis',
          align: 'left'
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
    }
  },
  computed: {
    ...mapGetters('data', ['apiKey', 'currentCryptoName', 'currentCryptoArray'])
  },
  methods: {
    updateGraphic() {
      // this.chartOptions.title.text.split(' - ')[1] = this.currentCryptoName
      this.$refs.realtimeChart.updateSeries([{
        data: this.currentCryptoArray
      }], true, true)
    }
  },
  mounted() {
    const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + this.apiKey)

    ccStreamer.onopen = () => {
      const subRequest = {
        "action": "SubAdd",
        "subs": this.allSubs
      };
      ccStreamer.send(JSON.stringify(subRequest));
    }

    ccStreamer.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.$store.commit('data/SET_CRYPTO_DATA', data)
    }
  },
}
</script>

<style>
.app__main {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
}
</style>
