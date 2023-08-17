<template>
    <textarea
        type="text"
        name=""
        class="area"
        :placeholder="placeholder"
        :id="id"
        :value = "value"
        @input="$emit('input', $event.target.value)"
    />
</template>

<script>

export default {
    name: 'TextareaComponent',
    props: {
        placeholder: '',
        id: '',
        value: ''
    }
}
</script>

<style scoped>
    .area {
        overflow: hidden;
        padding: 6px 30px 6px 10px;
        color: #555;
        background-color: #fff;
        outline: 1px solid #ccc;
        border-radius: 4px;
        resize: none;
        width: 100%;
    }
    .area:focus, .area:hover {
        outline: 1px solid #1284e7;
    }
    .area:focus::-webkit-input-placeholder {
        color: transparent;
    }
</style>