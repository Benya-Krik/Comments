<template>
    <article class="comment-card">
        <p class="comment-card__id">#{{ content.id }}</p>

        <div class="comment-card__params">
            <p>Author:</p>            
            <p v-if="!isEdit.name" class="comment-card__name"> {{ content.name }}</p>
            <input-component v-if="isEdit.name" v-model="inputValues.name" />
            <div v-if="!isEdit.name" class="comment-card__edit" @click="editComment('name')">
                <inline-svg :width="18" :height="18" :id="'edit'" />
            </div>
            <div v-if="isEdit.name" class="comment-card__change" @click="applyCommentChanges('name')">
                <inline-svg :width="18" :height="18" :id="'check'" />
            </div>
        </div>

        <div class="comment-card__params">
            <p>Comment:</p>           
            <p v-if="!isEdit.text" class="comment-card__text"> {{ content.text }}</p>
            <textarea-component v-if="isEdit.text" v-model="inputValues.text" />
            <div v-if="!isEdit.text" class="comment-card__edit" @click="editComment('text')">
                <inline-svg :width="18" :height="18" :id="'edit'" />
            </div>
            <div v-if="isEdit.text" class="comment-card__change" @click="applyCommentChanges('text')">
                <inline-svg :width="18" :height="18" :id="'check'" />
            </div>
        </div>

        <div class="comment-card__params">
            <p>Date:</p>           
            <p v-if="!isEdit.date" class="comment-card__date"> {{ content.date }}</p>
            <date-picker v-if="isEdit.date" v-model="inputValues.date" valueType="MM/DD/YYYY" />
            <div v-if="!isEdit.date" class="comment-card__edit" @click="editComment('date')">
                <inline-svg :width="18" :height="18" :id="'edit'" />
            </div>
            <div v-if="isEdit.date" class="comment-card__change" @click="applyCommentChanges('date')">
                <inline-svg :width="18" :height="18" :id="'check'" />
            </div>
        </div>


        <button class="comment-card__close-button" @click="DeleteComment(content.id)"></button>
    </article>
</template>

<script>
import { mapActions } from 'vuex';

import InputComponent from '../UI/InputComponent.vue';
import TextareaComponent from '../UI/TextareaComponent.vue';
import DatePicker from 'vue2-datepicker';
import InlineSvg from '../modules/InlineSvg.vue';
export default {
    name: 'CommentCard',
    components: {
        InputComponent,
        TextareaComponent,
        DatePicker,
        InlineSvg,
    },
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isEdit: {
                name: false,
                text: false,
                date: false
            },
            inputValues: {
                name: '',
                text: '',
                date: ''
            },
        }
    },
    created() {
        this.initValues();
    },
    methods: {
        ...mapActions(['DeleteComment', 'ChangeComment']),
        async applyCommentChanges(valueType) {
            const dataObj = {
                id: this.content.id,
                name: this.inputValues.name,
                text: this.inputValues.text,
                date: this.inputValues.date
            };
            if (this.inputValues[valueType] !== this.content[valueType]) {
                await this.ChangeComment(dataObj);
            }
            this.isEdit[valueType] = false;
        },
        editComment(valueType) {
            this.isEdit[valueType] = true;
            this.inputValues[valueType] = this.content[valueType];
        },
        initValues() {
            Object.keys(this.inputValues).forEach(key => {
                this.inputValues[key] = this.content[key];
            })
        }
    }
}
</script>

<style scoped>
    .comment-card {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 12px;
        gap: 12px;
        color: black;
        display: grid;
        position: relative;
        width: 100%;
        max-width: 360px;
        min-height: 132px;
    }
    .comment-card__params {
        display: flex;
        justify-content: space-between;
        gap: 8px;
    }

    .comment-card__close-button {
        position: absolute;
        top: 5px;
        right: 6px;
        width: 30px;
        height: 30px;
    }
    .comment-card__close-button:hover::before {
        background-color: #1284e7;
        transition: all 0.3s ease;
    }
    .comment-card__close-button:hover::after {
        background-color: #1284e7;
        transition: all 0.3s ease;
    }
    .comment-card__close-button::before {
        content: '';
        display: block;
        width: 1px;
        height: 20px;
        background-color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        transition: all 0.3s ease;
    }

    .comment-card__close-button::after {
        content: '';
        display: block;
        width: 1px;
        height: 20px;
        background-color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        transition: all 0.3s ease;
    }


    .comment-card__close:hover {
        cursor: pointer;
    }
    .comment-card__text {
        word-break:break-all;
    }
    .comment-card__edit:hover {
        cursor: pointer;
        opacity: .8;
    }
    .comment-card__change:hover {
        cursor: pointer;
        opacity: .8;
    }
    svg {
        min-width: 18px;
    }
</style>