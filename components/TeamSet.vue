<template>
  <div class="team-set flex flex-col basis-1/3 max-md:mt-5" v-if="isLocked">
    <p class="text-2xl text-gray-500 text-center pb-2 font-bold">Line-up</p>
    <div class="flex flex-row gap-2 items-center justify-center">
      <button type="button"
      class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      <font-awesome-icon icon="fa-refresh" class="w-14 h-14" />
    </button>
    <button type="button"
      class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      <font-awesome-icon icon="fa-envelope" class="w-14 h-14" />
    </button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  isLocked: {
    type: Boolean,
    required: true,
    default: false
  }
})
</script>