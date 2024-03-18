<script setup>
import { RouterView } from 'vue-router'
import AppProvider from '@/components/AppProvider/index.vue'
import Sprout from '@/components/Sprout/index'
import TheFooter from '@/components/TheFooter/index.vue'
</script>

<template>
  <AppProvider>
    <Sprout mt-64px />
    <RouterView />
    <TheFooter />
  </AppProvider>
</template>
