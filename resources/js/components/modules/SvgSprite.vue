<template>
    <svg class="svg-sprite" xmlns="http://www.w3.org/2000/svg">
        <symbol id="edit" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_4056_65808)">
                <path d="M16.9349 4.15998L13.9999 1.20999C13.806 1.01702 13.5435 0.908691 13.2699 0.908691C12.9963 0.908691 12.7339 1.01702 12.5399 1.20999L2.13491 11.6L1.18491 15.7C1.15213 15.8499 1.15326 16.0052 1.18819 16.1546C1.22313 16.3039 1.291 16.4436 1.38684 16.5634C1.48268 16.6832 1.60407 16.7801 1.74214 16.847C1.88022 16.9139 2.03149 16.9491 2.18491 16.95C2.25639 16.9572 2.32842 16.9572 2.39991 16.95L6.54491 16L16.9349 5.61999C17.1279 5.42604 17.2362 5.16358 17.2362 4.88998C17.2362 4.61639 17.1279 4.35393 16.9349 4.15998ZM6.04491 15.1L2.15991 15.915L3.04491 12.105L10.8299 4.34998L13.8299 7.34999L6.04491 15.1ZM14.4999 6.62499L11.4999 3.62498L13.2399 1.89499L16.1899 4.89498L14.4999 6.62499Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_4056_65808">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </symbol>
        <symbol id="check" viewBox="0 0 16 17" fill="none">
            <g clip-path="url(#clip0_5905_2286)">
                <path d="M6.84142 12.5664L15.875 3.53284L17.0172 4.675L6.7 14.9922L1.28284 9.575L2.425 8.43284L6.55858 12.5664L6.7 12.7078L6.84142 12.5664Z" fill="black" stroke="white" stroke-width="0.4"/>
            </g>
            <defs>
                <clipPath id="clip0_5905_2286">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.25)"/>
                </clipPath>
            </defs>
        </symbol>
    </svg>
</template>

<script>
export default {
    name: 'SvgSprite'
}
</script>

<style scoped>
.svg-sprite {
    position: absolute;
    width: 0;
    height: 0;
}
</style>