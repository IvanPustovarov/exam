import { createStore } from 'vuex'

export default createStore({
  state: {
    places: null,
    article: {
      start: [
      "В начале этого месяца у нас была экспедиция в Африку. Один из наших сотрудников сьездил и рассказал нам об условиях жизни местных жителей", 
      "В конце этого года ожидается конференция по теме Front-end. Наш сотрудник собрался рассказать о чём будет доклад.", 
      "С сегоднешнего дня все сотрудники обязаны пройти вакцинацию от вируса обезьяней оспы. Более подробно об этом нам расскажет следующий сотрудник", 
      "В прошлом году экономический рост привысил 50%. Мы были рады услышать подробности из первых уст от"],
      end: "Он также готовы поделится интересной информацией специально для нашего портала."
    }
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
