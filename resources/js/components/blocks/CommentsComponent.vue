<template>
    <section class="comments">
        <comment-card
            v-for="comment in getSlicedComments"
            :key="comment.id"
            :content="comment"
        />
        <pagination-component />
    </section>
</template>

<script>

import CommentCard from '../blocks/CommentCard.vue';

import { mapActions, mapGetters } from 'vuex';
import PaginationComponent from './PaginationComponent.vue';

export default {
    name: 'CommentsComponent',
    components: {
        CommentCard,
        PaginationComponent
    },
    async created() {
        await this.FetchData();
    },
    computed: {
        ...mapGetters(['getAllComments', 'getSlicedComments'])
    },
    methods: {
        ...mapActions(['FetchData']),
    }
}
</script>

<style scoped>
.comments{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
}
</style>