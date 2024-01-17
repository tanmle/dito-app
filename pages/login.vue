<template>
  <div class="container-fluid">
    <div class="bg-gray-100">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <Auth class=""/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    navigateTo('/match')
  }
})
</script>

<style>

</style>