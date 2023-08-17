<template>
    <svg :width="width" :height="height">
        <use :href="`#${id}`"></use>
    </svg>
</template>

<script>
export default {
    name: 'InlineSvg',
    props: {
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }
}
</script>