import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      teste: 'olá !'
    },
    getters: {
      getTeste: (state) => { return state.teste }
    }
  })
}

export default store