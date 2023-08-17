<template>
    <ul class="pagination">
        <button-component
            class="pagination__button-prev"
            :disabled="activePage === 1"
            :modifier="'border-grey'" 
            @click="setPage(getCurrentPage - 1)"
        >
            <span>prev</span>
        </button-component>

        <li v-for="page in getPagesQuantity" @click="setPage(page)">
            <button-component :class="{active: activePage === page}"  :modifier="'border-grey'" class="pagination__button-prev">
                <span>{{ page }}</span>
            </button-component>
        </li>

        <button-component
            class="pagination__button-next"
            :disabled="activePage === getPagesQuantity"
            :modifier="'border-grey'"
            @click="setPage(getCurrentPage + 1)" 
        >
            <span>next</span>
        </button-component>
    </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ButtonComponent from '../UI/ButtonComponent.vue'
export default {
    name: 'PaginationComponent',
    components: {
        ButtonComponent
    },
    data() {
        return {
            activePage: 1
        }
    },
    watch: {
        getPagesQuantity() {
            if(this.getCurrentPage > this.getPagesQuantity) {
                this.setPage(this.getCurrentPage - 1)
            }
        }
    },
    computed: {
        ...mapGetters(['getAllComments', 'getPagesQuantity', 'getCurrentPage'])
    },
    methods: {
        ...mapMutations(['SET_CURRENT_PAGE']),
        setPage(page){
            if(page > 0 && page <= this.getPagesQuantity) {
                this.SET_CURRENT_PAGE(page);
                this.activePage = page;
            }
        },
    }
}
</script>

<style scoped>
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
</style>