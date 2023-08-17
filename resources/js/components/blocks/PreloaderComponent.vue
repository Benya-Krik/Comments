<template>
    <div class="preloader">
        <div class="preloader__circle"></div>
    </div>
</template>

<script>
export default {
    name: 'PreloaderComponent',
}
</script>

<style scoped>
    .preloader {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(229, 229, 229, .9);
    }
    .preloader__circle {
        position: absolute;
        animation-name: rotateCircle;
        animation-iteration-count: infinite;
        animation-duration: 3s;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(180deg);
        display: block;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px dashed black;
    }
    @keyframes rotateCircle {
        from {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
</style>