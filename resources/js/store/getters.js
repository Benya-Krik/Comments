export default {
    getAllComments(state) {
        return state.comments;
    },
    getSlicedComments(state){
        return state.slicedComments;
    },
    getLastSortingOptions(state){
        return state.lastSortingOptions;
    },
    getPagesQuantity(state){
        return Math.ceil(state.comments.length / state.quantityCommentsOnPage);
    },
    getCurrentPage(state){
        return state.currentPage;
    },
    getIsPageLoaded(state){
        return state.isPageLoaded;
    }
}