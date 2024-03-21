<template>
  <BallLoader v-if="isLoading"></BallLoader>
  <p class="text-center text-5xl mb-2">Match setting</p>
  <div class="flex flex-col gap-5 border-2 border-solid rounded-md m-3 justify-center">
    <div class="flex flex-row justify-center">
      <div class="flex flex-col mr-2">
        <div id="match" class="mt-6 flex-col flex justify-center relative max-w-max mx-auto">
          <span class="text-center text-xl mb-2 absolute top-[-15px] left-0 right-0 mx-auto bg-white w-20">Match</span>
          <div class="flex flex-col border-4 rounded-lg w-96 mx-auto h-36">
            <div class="flex flex-row justify-center mt-6 ml-2 items-center">
              <label for="txtStadium"
                class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">Stadium</label>
              <input type="text" id="txtStadium"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Stadium" required />
            </div>
            <div class="flex flex-row justify-center mt-6 ml-2 items-center">
              <label for="txtTime" class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">Time</label>
              <input type="text" id="txtTime"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Time" required />
            </div>
          </div>
        </div>
        <div id="fees" class="mt-6 flex-col flex justify-center relative max-w-max mx-auto">
          <span class="text-center text-xl mb-2 absolute top-[-15px] left-0 right-0 mx-auto bg-white w-20">Fees</span>
          <div class="flex flex-col border-4 rounded-lg w-96 mx-auto h-36">
            <div class="flex flex-row justify-center mt-6 ml-2 items-center">
              <label for="txtPerMatch" class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">Per
                match</label>
              <input type="text" id="txtPerMatch"
                class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <div class="flex flex-row justify-center mt-6 ml-2 items-center">
              <label for="txtMonthly"
                class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">Monthly</label>
              <input type="text" id="txtMonthly"
                class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="penalties" class="mt-6 flex-col flex justify-center relative max-w-max mx-auto">
          <span
            class="text-center text-xl mb-2 absolute top-[-15px] left-0 right-0 mx-auto bg-white w-20">Penalties</span>
          <div class="flex flex-col border-4 rounded-lg w-96 mx-auto">
            <div class="flex flex-row justify-center mt-6 ml-2 items-center">
              <label for="txtAbsence"
                class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">Absence</label>
              <input type="text" id="txtAbsence"
                class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <div class="flex flex-row justify-center mt-1 items-center ml-2">
              <label for="txtLate5" class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">Late 5
                mins</label>
              <input type="text" id="txtLate5"
                class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <div class="flex flex-row justify-center mt-1 items-center ml-2">
              <label for="txtLate10" class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">Late 10
                mins</label>
              <input type="text" id="txtLate10"
                class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <div class="flex flex-row justify-center mt-1 items-center ml-2">
              <label for="txtLack" class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">Lacking of
                player</label>
              <input type="text" id="txtLack"
                class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <div class="flex flex-row justify-center mt-1 items-center ml-2">
              <label for="txtNoReg" class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">No
                register</label>
              <input type="text" id="txtNoReg"
                class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <div class="flex flex-row justify-center mt-1 items-center ml-2 mb-1 pb-1">
              <label for="txtNoGk" class="text-sm font-medium text-gray-900 dark:text-white mr-2 w-32">No GK</label>
              <input type="text" id="txtNoGk"
                class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div id="customEmail" class="mt-6 flex-col flex justify-center relative max-w-max mx-auto mb-2">
        <span
          class="text-center text-xl mb-2 absolute top-[-15px] left-0 right-0 mx-auto bg-white w-40">Custom email</span>
        <div class="flex flex-col border-4 rounded-lg w-96 mx-auto">
          <div class="flex items-center mb-4 mt-2 ml-2">
            <input id="default-checkbox" type="checkbox" v-model="isCustomEmail" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Use custom emails</label>
          </div>
          <textarea :disabled="!isCustomEmail" id="message" rows="4" class="ml-2 mb-2 mr-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Separate emails by commas"></textarea>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button type="button" class="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isLoading = ref(true)
const isCustomEmail = ref(false)

onMounted(async () => {
  isLoading.value = false;
})
</script>

<style></style>