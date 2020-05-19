export const state = () => ({
  counter: 0,
  months: []
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

export const actions = {
  getDisputeMonths () {
    state.months = [
      {
          "name":"Novembro/Dezembro",
          "id":19,
      },
      {
          "name":"Outubro",
          "id":18,
      },
      {
          "name":"Setembro",
          "id":17,
      },
      {
          "name":"Agosto",
          "id":16,
      },
      {
          "name":"Junho/Julho",
          "id":15,
      },
      {
          "name":"Abril/Maio",
          "id":13,
      }
    ]
  }
}
