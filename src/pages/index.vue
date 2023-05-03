<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const counterStore = useCounterStore()
</script>

<template>
  <div text-center>
    <n-button type="primary" round @click="$router.push({ name: 'grow' })">
      Start!
    </n-button>
    <p mt-24 text="14 gray-5" italic>
      Sprout is tiny, but it nurtures infinite hope.
    </p>
    <div flex-center gap-x-12>
      <n-button type="error" secondary circle @click="counterStore.decrease">
        -
      </n-button>
      <div text-20>
        {{ counterStore.count }}
      </div>
      <n-button type="primary" secondary circle @click="counterStore.increase">
        +
      </n-button>
    </div>
  </div>
</template>
