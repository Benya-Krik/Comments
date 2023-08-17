<template>
    <div class="sorting">
        <div :class="{active: isOpenDetails}" class="sorting__close-area" @click="closeDetails"></div>
        <details ref="details" class="sorting__details" @click="isOpenDetails = true">
            <summary class="sorting__summary">Sorting by:</summary>
            <div class="sorting__wrapper">
                <p 
                    class="sorting__item"
                    :class="{active: option.interfaceTitle === chosenSorting}"
                    v-for="option in sortOptions"
                    @click="setSortOptions(option)"
                >
                    {{ option.interfaceTitle }} 
                </p>
                    
            </div>
        </details>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { SORT_OPTIONS } from '../../staticData'
export default {
    name: 'SortingComponent',
    computed: {
        ...mapGetters(['getAllComments'])
    },
    data() {
        return {
            sortOptions: SORT_OPTIONS,
            isOpenDetails: false,
            chosenSorting: 'Id High'
        }
    },
    methods: {
        ...mapMutations(['SORT_COMMENTS','SAVE_SORT_OPTIONS']),
        setSortOptions(option) {
            const options = option;
            const comments = this.getAllComments;
            this.SAVE_SORT_OPTIONS(options);
            this.SORT_COMMENTS({ comments: comments, sortOption: options });
            this.chosenSorting = option.interfaceTitle
        },
        closeDetails() {
            this.isOpenDetails = false;
            this.$refs.details.open = false;
        }
    }
}
</script>

<style scoped>
    .sorting{
        display: flex;
        justify-content: center;
    }
    .sorting__close-area {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: none;
        z-index: 1;
    }

    .sorting__close-area.active {
        display: block;
    }
    .sorting__details {
        position: relative;
        z-index: 1;
    }
    .sorting__wrapper {
        position: absolute;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        left: -20px;
        right: -20px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .sorting__summary{
        display: block;
        list-style: none;
    }
    .sorting__summary:hover{
        cursor: pointer;
        opacity: 0.8;
    }
    .sorting__summary::-webkit-details-marker{
        display: none;
    }
    .sorting__item.active {
        color: #1284e7;
    }
    .sorting__item:hover {
        cursor: pointer;
        opacity: 0.8;
    }
</style>