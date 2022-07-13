import { createStore } from 'vuex'

export default createStore({
  state: {
    employees: null
  },
  getters: {
  },
  mutations: {
    setEmployees (state, payload) {
      state.employees = payload;
    }
  },
  actions: {
    async getEmployees ({commit}) {
      const response = await fetch(
        "https://629915c87b866a90ec368b06.mockapi.io/api/employee",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );
      
      commit("setEmployees", await response.json());
    }
  },
  modules: {
  }
})
