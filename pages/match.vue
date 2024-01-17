<template>
  <div class="pl-3">
    <div class="match w-auto flex max-md:flex-col flex-row">
      <Match @locked="toggleLocked"/>
      <TeamSet :is-locked="isLocked"/>
    </div>
  </div>
</template>

<script setup>
const isLocked = ref(false)

const toggleLocked = (value) => {
  isLocked.value = value
}

</script>