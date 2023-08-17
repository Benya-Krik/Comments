import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


Vue.use(Vuex);

export default new Vuex.Store ({

    state: {
        lastSortingOptions: {
            sortType: 'id',
            direction: 'reverse'
        },
        comments: [],
        slicedComments: [],
        comment: {
            date: '',
            name: '',
            text: '',
        },
        currentPage: 1,
        quantityCommentsOnPage: 3,
        isPageLoaded: true
    },

    actions: actions,

    mutations: mutations,

    getters: getters
}) 