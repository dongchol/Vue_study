<!-- eslint-disable --> ​
<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username">
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password">
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname">
		</div>
		<button v-bind:disabled="!isUsernameValid || !password" type="submit">회원가입</button>
		<p> {{ logMessage  }} </p>
	</form>
</template>
<!-- eslint-disable --> ​
<script>
import { reactive } from 'vue';
import { registerUser } from '@/api/index.js';
import { ValidateEmail } from '@/utils/validation.js';

export default {
	data() {
		return{
			// form values
			username: '',
			password: '',
			nickname: '',
			//log
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
			console.log('폼제출');
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			console.log(data.username);
			this.logMessage = `${ data.username } 님이 가입되었습니다`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		}
	},
	// setup () {
	// 	const state = reactive ({
	// 		username: '',
	// 		password: '',
	// 		nickname: '',
	// 	})

	// 	const submitForm = () => {
	// 		console.log('폼 제출');
	// 	}
	// }
};
</script>
<!-- eslint-disable --> ​
<style scoped></style>
