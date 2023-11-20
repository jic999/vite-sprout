<script setup lang="ts">
defineOptions({
  name: 'Grow',
})
$loadingBar.start()
$message.loading('Growing', { duration: 0 })

setTimeout(() => {
  $loadingBar.finish()
  $message.destroyAll()
  $message.success('Grow up~')
}, 1500)
</script>

<template>
  <div flex-center>
    <n-button type="primary" round secondary @click="$router.push('/')">
      Back~
    </n-button>
  </div>
</template>
