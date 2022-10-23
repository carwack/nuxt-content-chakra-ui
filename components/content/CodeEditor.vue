<template>
	<VueLive :code="code" :components="Chakra" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import 'vue-live/lib/vue-live.esm.css'
import { VueLive } from 'vue-live'

import * as Chakra from '@chakra-ui/vue-next'

const props = defineProps<{ code: string }>()
</script>
