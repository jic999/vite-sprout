<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const counterStore = useCounterStore()
</script>

<template>
  <div text-center>
    <n-button type="primary" round @click="$router.push('/grow')">
      Start!
    </n-button>
    <p mt-xl text="sm gray-5" italic>
      Sprout is tiny, but it nurtures infinite hope.
    </p>
    <div flex-center gap-x-sm>
      <n-button type="error" secondary circle @click="counterStore.decrease">
        -
      </n-button>
      <div text-lg>
        {{ counterStore.count }}
      </div>
      <n-button type="primary" secondary circle @click="counterStore.increase">
        +
      </n-button>
    </div>
  </div>
</template>
