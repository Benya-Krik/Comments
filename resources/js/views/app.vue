<template>
    <div>
        <svg-sprite />
        <header-component />
        <index-component />
    </div>
</template>

<script>
import SvgSprite from '../components/modules/SvgSprite.vue';
import HeaderComponent from '../components/HeaderComponent.vue'
import IndexComponent from '../components/pages/IndexComponent.vue'

export default {
    components: {
        HeaderComponent,
        IndexComponent,
        SvgSprite,
    },
    computed: {},
    data() {
        return {
            message:'comments'
        }
    }
};
</script>

<style>
#app {
    font-family: 'Josefin Sans', sans-serif;
}
</style>

