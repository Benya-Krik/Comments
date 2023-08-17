<template>
    <form class="form" id="comment-sender" @submit.prevent="SubmitForm()">
        <input-component placeholder="Your Name" v-model="nameValue" />
        <textarea-component placeholder="Your Message" v-model="messageValue" />
        <date-picker v-model="dateValue" valueType="MM/DD/YYYY" />
        <button-component :modifier="'background-blue'" class="comment-sender">
            <span>Send</span>
        </button-component>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
import InputComponent from '../UI/InputComponent.vue';
import TextareaComponent from '../UI/TextareaComponent.vue';
import ButtonComponent from '../UI/ButtonComponent.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';


export default {
    name: 'commentForm',
    components: {
        InputComponent,
        TextareaComponent,
        DatePicker,
        ButtonComponent
    },
    data() {
        return {
            nameValue: '',
            messageValue: '',
            dateValue: ''
        }
    },
    methods: {
        ...mapActions(['PostComment']),
        SubmitForm() {
            const data = {
                name: this.nameValue,
                text: this.messageValue,
                date: this.dateValue,
            }
            this.PostComment(data);
            this.nameValue = '';
            this.messageValue = '';
            this.dateValue = '';
        },
    }
}
</script>

<style lang="css" scoped>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }
    .mx-datepicker {
        width: 100%;
    }
</style>
