<script setup lang="ts">
const { data } = useCasino('/v1/casino/games')
</script>
<template>
  <div>
    {{ data }}
  </div>
</template>
