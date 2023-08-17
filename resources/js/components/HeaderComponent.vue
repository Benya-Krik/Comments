<template>
    <header class="header">
        <p class="header__logo">comments.vue</p>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="css" scoped>
    .header {
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        position: relative;
        z-index: 1;
    }
    .header__logo {
        font-family: 'Handjet', cursive;
        font-size: 40px;
        color: aliceblue;
    }
</style>
