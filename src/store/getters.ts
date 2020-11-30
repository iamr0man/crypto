const getters = {
    chartData(state:any) {
        return state.chartData
    },
    currentCryptoName(state:any) {
        return state.currentCryptoName
    },
    currentCryptoArray(state:any) {
        return state.cryptocurrencies[state.currentCryptoName].history
    },
}

export default getters
