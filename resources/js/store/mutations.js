export default {
    SORT_COMMENTS(state, value){
        const tempArray = value.comments.concat();
        const sortType = value.sortOption.sortType;
        const sortDirection = value.sortOption.direction;
        
        switch(sortType) {
            case 'id':
                tempArray.sort((a, b) => a[sortType] - b[sortType]);
                break;

            case 'date':
                tempArray.sort((a, b) => new Date(a[sortType]) - new Date(b[sortType]));
                break;
        }

        state.comments = sortDirection === 'reverse' ?  tempArray.reverse() : tempArray;
        this.commit('SET_CURRENT_PAGE', state.currentPage);
    },

    SAVE_SORT_OPTIONS(state, value){
        state.lastSortingOptions = value
    },

    SET_CURRENT_PAGE(state, value){
        state.currentPage = value;
        const slicedData = []

        for(let i = state.currentPage * state.quantityCommentsOnPage - state.quantityCommentsOnPage; i < state.currentPage*state.quantityCommentsOnPage; i++){
            if(i < state.comments.length) {
                slicedData.push(state.comments[i])
            }
        };
        state.slicedComments = slicedData;
    },
    SET_IS_PAGE_LOADED(state, value) {
        state.isPageLoaded = value;
    }
}