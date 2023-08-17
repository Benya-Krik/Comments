<template>
    <main class="main">
        <sorting-component />
        <comments-component />
        <comments-form />
        <preloader-component v-if="!getIsPageLoaded" />
    </main>
</template>

<script>
import CommentsForm from '../blocks/CommentsForm.vue';
import CommentsComponent from '../blocks/CommentsComponent.vue';
import SortingComponent from '../blocks/SortingComponent.vue';
import PreloaderComponent from '../blocks/PreloaderComponent.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'MainComponent',
    components: {
        CommentsForm,
        CommentsComponent,
        SortingComponent,
        PreloaderComponent
    },
    computed: {
        ...mapGetters(['getIsPageLoaded'])
    }
}
</script>

<style lang="css" scoped>
    .main {
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        position: relative;
        z-index: 0;
    }
</style>
