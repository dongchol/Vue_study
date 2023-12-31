/* eslint-disable */
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});


function registerUser(userData) {
	// const url = "http://localhost:3000/signup"; //api end point
	// axios.post(url, userData);
    return instance.post('signup', userData);
}

function loginUser(userData){
    return instance.post('login', userData);
}

export { registerUser, loginUser };
