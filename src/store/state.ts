const state = {
    chartData: null,
    cryptocurrencies: {
        'BTC': { price: 0, history: []},
        'LTC': { price: 0, history: []},
        'NMC': { price: 0, history: []},
        'STC': { price: 0, history: []},
        'PPC': { price: 0, history: []},
        'EMC': { price: 0, history: []},
        'GRC': { price: 0, history: []},
        'XPM': { price: 0, history: []},
        'VTC': { price: 0, history: []},
        'ETH': { price: 0, history: []},
        'ETC': { price: 0, history: []},
        'WAVES': { price: 0, history: []},
        'ZEC': { price: 0, history: []},
        'BCH': { price: 0, history: []}
    },
    currentCryptoName: 'BTC'
}

export default state
