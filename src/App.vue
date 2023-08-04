<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <AppProvider>
    <Sprout mt-64px />
    <RouterView />
    <TheFooter />
  </AppProvider>
</template>
