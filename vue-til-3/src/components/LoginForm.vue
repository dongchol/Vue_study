<!-- eslint-disable --> ​
<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">id:</label>
            <input id="username" type="text" v-model="username"/>
        </div>
        <div>
            <label for="password">pw:</label>
            <input id="password" type="text" v-model="password"/>
        </div>
        <button v-bind:disabled="!isUsernameValid || !password" type="submit">로그인</button>
        <p> {{ logMessage }} </p>
    </form>
</template>
<!-- eslint-disable --> ​
<script>
import { loginUser } from '@/api/index';
import { ValidateEmail } from '@/utils/validation.js';

export default {
    data() {
        return {
            username: '',
            password: '',
            logMessage: '',
        };
    },

    computed: {
        isUsernameValid(){
            return ValidateEmail(this.username);
        },
    },
    methods: {
        async submitForm() {
            try{
                // 비즈니스 로직
                const userData = {
                username: this.username,
                password: this.password,
                };
                const { data } = await loginUser(userData);
                console.log(data.user.username);
                this.logMessage = `${data.user.username} 님 환영합니다`;
                //this.initForm();
            }catch(error){
                // 에러 핸들링할 코드
                //console.log(error.response.data);
                this.logMessage = error.response.data;
            } finally{
                this.initForm();
            }
        },
        initForm(){
            this.username='';
            this.password='';
        },
    },
};
</script>
<!-- eslint-disable --> ​
<style scoped>
</style>
