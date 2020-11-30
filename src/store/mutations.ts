const mutations = {
    UPDATE_CHART_DATA(state:any, val:any) {
        state.chartData = val;
    },
    SET_CRYPTO_DATA: (state:any, payload:any) => {
        if (payload.FIRSTTS && payload.OPEN) {
            state.cryptocurrencies[payload.FROMSYMBOL].history.push({
                time: new Date(0).setSeconds(payload.FIRSTTS - 1000*60),
                    close: payload.CLOSE,
                    open: payload.OPEN,
                    high: payload.HIGH,
                    low: payload.LOW,
                    volume: payload.VOLUMETO
            })
        }
        if (payload.TYPE === '5') {
            state.cryptocurrencies[payload.FROMSYMBOL].price = payload.PRICE
        }
    },
    SET_CRYPTO_VALUE: (state:any, payload:any) => {
        state.cryptocurrencies[payload.name].PRICE = payload.data
    },
    SET_CRYPTO_NAME: (state:any, payload:any) => {
        state.currentCryptoName = payload.name
    }
}

export default mutations
