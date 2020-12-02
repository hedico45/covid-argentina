import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import { generateSeries } from './helpers/genData'
import { getCovidData } from './api/wikiCovid'

Vue.use(Vuex)

let state = {
    data: null,
    covid: null
}

let getters = {
    series: (state) => {
        return state.data;
    },
    covid: (state) => {
        return state.covid;
    }
}

let mutations = {
    FETCH_DATA_COVID_MUTATION: (state, data) => {
        state.covid = data;
    },
    GENERATE_CASOS: (state) => {
    	if (state.covid) {
            state.data = generateSeries(state.covid, 'casos') 
        } 
    },
    GENERATE_MUERTOS: (state) => {
    	if (state.covid) {
            state.data = generateSeries(state.covid, 'muertos') 
        } 
    },
    GENERATE_RECUPERADOS: (state) => {
    	if (state.covid) {
            state.data = generateSeries(state.covid, 'recuperados') 
        } 
    }
}

let actions = {
    async FETCH_DATA_COVID({ commit }) {
        try {
            let data = await getCovidData()
            commit('FETCH_DATA_COVID_MUTATION', data)
            commit('GENERATE_CASOS')
        } catch (err) {
            console.log(err)
        }
    },
    GENERATE({commit},{option}){
    	console.log(option)
    	switch(option){
    		case 'casos': commit('GENERATE_CASOS'); break;
    		case 'muertos': commit('GENERATE_MUERTOS'); break;
    		case 'recuperados': commit('GENERATE_RECUPERADOS'); break;
    	}
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})