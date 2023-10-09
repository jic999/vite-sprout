<script setup lang="ts">
defineOptions({
  name: 'TheFooter',
})
</script>

<template>
  <div my-xl flex-center gap-x-xs>
    <div i-carbon:moon dark:i-carbon:light icon-btn @click="toggleDark()" />
    <a i-carbon:logo-github icon-btn href="https://github.com/jic999/vite-sprout" target="_blank" />
  </div>
</template>
