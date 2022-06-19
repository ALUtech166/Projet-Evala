import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 170
export const SIDEBAR_WIDTH_COLLAPSED = 75
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)



import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    user: {
      name: ''
    }
  },

 
  getters: {
    user(state) {
      return state.user
    }
  },

  actions: {
    user(context, data) {
      context.commit('user', data)
    }
  },

  mutations: {
    user(state, data) {
      state.user = data
    }
  }
})