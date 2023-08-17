import axios from 'axios';

export default {
    async FetchData(ctx) {
        ctx.commit('SET_IS_PAGE_LOADED', false)
        await axios.get('api/comments').then(response => {
            if(response.status === 200){
                ctx.commit('SORT_COMMENTS', {comments:response.data, sortOption:this.getters.getLastSortingOptions})
                ctx.commit('SET_IS_PAGE_LOADED', true)
            }
        })
    },
    async PostComment(ctx, value) {
        ctx.commit('SET_IS_PAGE_LOADED', false)
        await axios.post('/api/comments/', value).then(response => {
            if(response.status === 200){
                return this.dispatch('FetchData')
            }
        })
    },
    async ChangeComment(ctx, value) {
        ctx.commit('SET_IS_PAGE_LOADED', false)
        await axios.patch(`api/comments/${value.id}`, value).then(response => {
            if(response.status === 200){
                return this.dispatch('FetchData')
            }
        })
    },
    async DeleteComment(ctx, id) {
        ctx.commit('SET_IS_PAGE_LOADED', false)
        await axios.delete(`api/comments/${id}`).then(response => {
            if(response.status === 200){
                return this.dispatch('FetchData')
            }
        })
    }
}