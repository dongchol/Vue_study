<template>
	<app-header></app-header>
	<router-view></router-view>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
	components: {
		AppHeader,
	},
}; 
</script>

<style></style>
