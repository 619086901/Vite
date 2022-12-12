<template>
  <h1 class="font-size12">{{ msg }}</h1>

  <a-button type="primary">Primary</a-button>
  <!-- <a-input placeholder="Basic usage" /> -->

  {{ state }}
</template>

<script setup>
// defineProps 是一个编译器宏，不再需要导入。
import { reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
