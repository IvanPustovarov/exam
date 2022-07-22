import { createStore } from 'vuex'

export default createStore({
  state: {
    places: null,
    sections: [
      {id: "eurasia"},
      {id: "islands"},
      {id: "africa"},
      {id: "north-america"},
      {id: "antarctica"},
      {id: "south-america"},
      {id: "australia"}
    ]
  },
  getters: {
  },
  mutations: {
    setPlaces (state, payload) {
      state.places = payload;
    }
  },
  actions: {
    async getPlaces ({commit}) {
      const response = await fetch(
        "https://629915c87b866a90ec368b06.mockapi.io/api/places",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );
      
      commit("setPlaces", await response.json());
    }
  },
  modules: {
  }
})
