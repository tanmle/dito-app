<template>
  <BallLoader v-if="isLoading"></BallLoader>
  <p class="text-center text-5xl">Players setting</p>
  <div class="relative shadow-md sm:rounded-lg">
    <div
      class="flex items-center flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="mr-3">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search-users"
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users">
        </div>
      </div>
      <div>
        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction"
          class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button">
          <span class="sr-only">Action button</span>
          Action
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <div id="dropdownAction"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate
                account</a>
            </li>
          </ul>
          <div class="py-1">
            <a href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
              User</a>
          </div>
        </div>
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-14">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            No
          </th>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="col" class="px-6 py-3">
            Level
          </th>
          <th scope="col" class="px-6 py-3">
            Position
          </th>
          <th scope="col" class="px-6 py-3">
            Default
          </th>
          <th scope="col" class="px-6 py-3">
            Role
          </th>
          <th scope="col" class="px-6 py-3">
            Match pay
          </th>
          <th scope="col" class="px-6 py-3">
            Status
          </th>
        </tr>
      </thead>
      <tbody v-show="!isLoading">
        <tr v-for="(player, index) in playersList"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input id="checkbox-table-search-1" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <td class="px-6 py-4">
            {{ index + 1 }}
          </td>
          <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img class="w-10 h-10 rounded-full" :src="player.avatar" alt="Jese image">
            <div class="ps-3">
              <div class="text-base font-semibold">{{ player.name }}</div>
              <div class="font-normal text-gray-500">{{ player.email }}</div>
            </div>
          </th>
          <td class="px-6 py-4">
            {{ player.level }}
          </td>
          <td class="px-6 py-4">
            <span v-if="player.position === 'Striker'"
              class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Striker</span>
            <span v-if="player.position === 'Defender'"
              class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Defender</span>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col">
              <div>
                <span v-if="player.is_mon_default"
                  class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Mon</span>
                <span v-if="player.is_tue_default"
                  class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Tue</span>
                <span v-if="player.is_wed_default"
                  class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Wed</span>
              </div>
              <div class="mt-1">
                <span v-if="player.is_thu_default"
                  class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Thu</span>
                <span v-if="player.is_fri_default"
                  class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Fri</span>
                <span v-if="player.is_sat_default"
                  class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Sat</span>
                <span v-if="player.is_sun_default"
                  class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Sun</span>
              </div>
            </div>

          </td>
          <td class="px-6 py-4 " :class="player.role == 1 ? 'text-yellow-300' : 'text-blue-300'">
            {{ player.role == 1 ? "Admin" : "User" }}
          </td>
          <td class="px-6 py-4">
            <span v-if="player.is_match_pay"
              class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span class="sr-only">Is match pay?</span>
            </span>
          </td>
          <td class="px-6 py-4">
            <span v-if="player.status == 1"
              class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Active</span>
            <span v-if="player.status == 2"
              class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Pending</span>
            <span v-if="player.status == 3"
              class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Banned</span>
          </td>
        </tr>
      </tbody>
    </table>
</div></template>

<script lang="ts" setup>
const playersStore = usePlayersStore();
const { fetchPlayers } = playersStore;
const { playersList } = storeToRefs(playersStore);
const isLoading = ref(true)

onMounted(async () => {
  await fetchPlayers();
  isLoading.value = false;
})
</script>

<style></style>