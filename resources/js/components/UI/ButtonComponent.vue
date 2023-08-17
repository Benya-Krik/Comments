<template>
    <button :class="`button--${modifier}`" class="button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'ButtonComponent',
    props: {
        buttonId: '',
        modifier: ''
    }
}
</script>

<style scoped>
    .button {
        padding: 6px;
        border-radius: 4px;
        width: 100%;
        transition: all 0.3s ease;
    }
    .button:disabled {
        pointer-events: none;
        background-color: #ccc;
    }
    .button--background-blue {
        background-color: #1284e7;
        color: #fff;
    }
    .button--border-grey {
        border: 1px solid #ccc;
        background-color: #fff;
        color: black;
    }
    .button--border-grey.active {
        border-color: #1284e7;
        background-color: #1284e7;
        color: #fff;
        pointer-events: none;
    }
    .button--border-grey:hover {
        cursor: pointer;
        border-color: #1284e7;
    }
    .button--background-blue:hover {
        cursor: pointer;
        background-color: #126ee7;
        transition: all 0.3s ease;
    }
</style>