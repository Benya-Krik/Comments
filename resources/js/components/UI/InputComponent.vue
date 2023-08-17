<template>
    <input 
        type="text" 
        class="input" 
        :placeholder="placeholder" 
        :id="id"
        :value = 'value'
        @input="$emit('input', $event.target.value)" 
    >
</template>

<script>

export default {
    name: 'InputComponent',
    props: {
        placeholder: '',
        id: '',
        value: ''
    }
}
</script>

<style scoped>
    .input {
        padding: 6px 30px 6px 10px;
        color: #555;
        background-color: #fff;
        outline: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
    }
    .input:focus, .input:hover {
        outline: 1px solid #1284e7;
    }
    .input:focus::-webkit-input-placeholder{
        color: transparent;
    }
</style>