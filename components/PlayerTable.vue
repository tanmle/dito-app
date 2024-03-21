<template>
  <BallLoader v-if="isLoading"></BallLoader>
  <p class="text-center text-5xl mb-2">Players setting</p>
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
            placeholder="Search for users" v-model="keyword" @input="searchPlayers">
        </div>
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-14 table-auto">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3 max-xl:hidden">
            No
          </th>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="col" class="px-6 py-3 max-xl:hidden">
            Level
          </th>
          <th scope="col" class="px-6 py-3 max-xl:hidden">
            Position
          </th>
          <th scope="col" class="px-6 py-3 max-xl:hidden">
            Default
          </th>
          <th scope="col" class="px-6 py-3 max-xl:hidden">
            Role
          </th>
          <th scope="col" class="px-6 py-3 max-xl:hidden">
            Match pay
          </th>
          <th scope="col" class="px-6 py-3 max-xl:hidden">
            Status
          </th>
          <th scope="col" class="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody v-show="!isLoading">
        <tr v-for="(player, index) in listCurrentPlayers"
          class="border-b dark:bg-gray-800 dark:border-gray-70 dark:hover:bg-gray-600"  :class="player.status === 3 ? 'bg-gray-600' : 'bg-white hover:bg-gray-200'">
          <td class="px-6 py-4 max-xl:hidden">
            {{ index + 1 }}
          </td>
          <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img class="w-10 h-10 rounded-full" :src="player.avatar" alt="Jese image">
            <div class="ps-3">
              <div class="text-base font-semibold">{{ player.name }}</div>
              <div class="font-normal text-gray-500">{{ player.email }}</div>
            </div>
          </th>
          <td class="px-6 py-4 max-xl:hidden">
            {{ player.level }}
          </td>
          <td class="px-6 py-4 max-xl:hidden">
            <span v-if="player.position === 'Striker'"
              class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Striker</span>
            <span v-if="player.position === 'Defender'"
              class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Defender</span>
          </td>
          <td class="px-6 py-4 max-xl:hidden">
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
          <td class="px-6 py-4 max-xl:hidden" :class="player.role === 1 ? 'text-yellow-300' : 'text-blue-300'">
            {{ player.role == 1 ? "Admin" : "User" }}
          </td>
          <td class="px-6 py-4 max-xl:hidden">
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
          <td class="px-6 py-4 max-xl:hidden">
            <span v-if="player.status == 1"
              class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Active</span>
            <span v-if="player.status == 2"
              class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Pending</span>
            <span v-if="player.status == 3"
              class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Banned</span>
          </td>
          <td class="px-6 py-4 text-blue-700">
            <button type="button"
              class="w-8 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-1">
              <font-awesome-icon icon="fa-pencil" class="w-4 h-4" />
            </button>
            <button type="button"
              class="w-8 h-8 text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <font-awesome-icon icon="fa-rotate" class="w-4 h-4" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import Fuse from 'fuse.js'
const playersStore = usePlayersStore();
const { fetchPlayers } = playersStore;
const { playersList } = storeToRefs(playersStore);
const isLoading = ref(true)
const keyword = ref('')
const listCurrentPlayers = ref([])

onMounted(async () => {
  await fetchPlayers();
  playersList.value.sort((a, b) =>
    a.name < b.name ? -1 : 1
  );
  playersList.value.sort((a, b) =>
    a.status - b.status
  );
  listCurrentPlayers.value = { ...playersList.value }
  isLoading.value = false;
})

const searchPlayers = () => {
  const fuse = new Fuse(playersList.value, {
    useExtendedSearch: true,
    keys: ['name', 'email']
  })

  let searchResult = fuse.search("'" + keyword.value.trim())
  listCurrentPlayers.value = searchResult.map(result => result.item)

  if (keyword.value.trim() === '') {
    listCurrentPlayers.value = playersList.value
  }
}
</script>

<style></style>