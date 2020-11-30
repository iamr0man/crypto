<template>
    <div class="crypto-item" @click="updateGraphic">
        <h4 class="crypto-item__name">{{ name }}</h4>
        <h4 class="crypto-item__price">${{ price }}</h4>
    </div>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
          price: 0
        }
    },
    methods: {
      updateGraphic() {
        this.$store.commit('data/SET_CRYPTO_NAME', { name: this.name })
        this.$emit('setCrypto', this.name)
      }
    },
    async mounted() {
      this.price = await this.$store.dispatch('data/getCurrentPrice', { name: this.name })
    }
}
</script>

<style lang="scss">
.crypto-item {
  width: 200px;
  display: flex;
  justify-content: space-between;

  border: 2px solid #e7e7e7;
  border-radius: 50px;
  padding: 10px;
  margin: 10px;
  background: #ffffff;
  box-shadow: 15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;
  cursor: pointer;
  transition: all .5s ease-in;

  &:hover {
    background-color: black;
    color: white;
  }
}
</style>

