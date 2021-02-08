import Vue from 'vue'

// initial state
const state = {  
	datas: []
}

// getters
const getters = {
}

// actions
const actions = {
	
}

// mutations
const mutations = {
	menuIndex(state,menus) {
		state.datas = menus
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}