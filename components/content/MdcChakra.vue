<template>
	<CBox :as="as" :apply="apply">
		<slot />
	</CBox>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { CBox } from '@chakra-ui/vue-next'

// @ts-ignore
// eslint-disable-next-line prettier/prettier
const props = defineProps<{ as?: string; apply?: string }>()
</script>
