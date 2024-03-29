<script setup>
import { ref } from "vue";

defineOptions({
	name: 'vue-macros-app'
})

const title = ref("Rspack + Vue2 + vue-macros");
</script>

<template>
	<div>{{ title }}</div>
</template>
