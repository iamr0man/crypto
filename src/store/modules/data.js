import axiosInstance from '../../services/instance'

const state = {
  apiKey: 'df6e4e1e375a2a91508dff84acd2f0f0bccc6d3659f2a1fa2dfe94990b25b2dd',
  cryptocurrencies: {
    'BTC': [],
    'LTC': [],
    'NMC': [],
    'STC': [],
    'PPC': [],
    'EMC': [],
    'GRC': [],
    'XPM': [],
    'VTC': [],
    'ETH': [],
    'ETC': [],
    'WAVES': [],
    'ZEC': [],
    'BCH': []
  },
  currentCryptoName: ''
}

const mutations = {
  SET_CRYPTO_DATA: (state, payload) => {
    if (payload.FIRSTTS && payload.OPEN) {
      state.cryptocurrencies[payload.FROMSYMBOL].push({
        x: new Date(new Date(0).setSeconds(payload.FIRSTTS)),
        y: [payload.OPEN, payload.HIGH, payload.LOW, payload.CLOSE]
      })
    }
  },
  SET_CRYPTO_VALUE: (state, payload) => {
    state.cryptocurrencies[payload.name].PRICE = payload.data
  },
  SET_CRYPTO_NAME: (state, payload) => {
    state.currentCryptoName = payload.name
  }
}
const actions = {
  getCurrentPrice: async ({ commit }, { name }) => {
    const res = await axiosInstance.get(`https://min-api.cryptocompare.com/data/price?fsym=${name}&tsyms=USD&api_key=${state.apiKey}`)
    if(res.USD) {
      commit('SET_CRYPTO_VALUE', { name, data: res.USD })
    }
    return await res.USD
  },
}
const getters = {
  apiKey: state => state.apiKey,
  currentCryptoName: state => state.currentCryptoName,
  currentCryptoArray: state => state.cryptocurrencies[state.currentCryptoName]
}

export default {
  state,
  mutations,
  actions,
  getters
}
