import {createStore} from 'vuex'

export default createStore(
  {
    state: () => ({
      id: ''
    }),
    mutations: {
      setIdState(state, value) {
        state.id = value
      }
    }
  }
) 