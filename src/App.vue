<script setup>
import { RouterView } from 'vue-router'
import Sprout from './components/Sprout/index'
import TheFooter from './components/TheFooter/index.vue'
</script>

<template>
  <AppProvider>
    <Sprout mt-64px />
    <RouterView />
    <TheFooter />
  </AppProvider>
</template>
