<template>
  <BallLoader v-if="isLoading"></BallLoader>
  <div class="flex flex-col max-md:basis-full basis-1/3">
    <p class="text-xl text-gray-500 pb-3"><span class="font-bold text-2xl">Today</span> {{ moment().format('ddd, DD MMM')
    }}</p>
    <div class="flex justify-center mb-4">
      <div class="absolute h-0 w-0">
        <VueDatePicker input-class-name="dp-custom-input" v-model="date" :preview-format="format" :format="format"
          @update:model-value="setDate" :enable-time-picker="false" auto-apply :clearable="false" ref="datepicker"></VueDatePicker>
      </div>
      <Cal class="cursor-pointer" :day="moment(date).format('DD')" :month="moment(date).format('MM')" :year="moment(date).format('YY')" @click="openDatePicker"></Cal>
    </div>
    <div class="flex flex-row gap-2 items-center justify-center">
      <div class="date-picker flex flex-row gap-2">
        <button type="button" @click="deleteCurrentMatch" v-if="isMatchOpened && !isLocked"
          class="w-12 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <font-awesome-icon icon="fa-trash-can" class="w-6 h-6" />
        </button>
        <button type="button" @click="addMatch" v-if="!isMatchOpened"
          class="w-12 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <font-awesome-icon icon="fa-rocket" class="w-6 h-6" />
        </button>
        <button v-if="isLocked" type="button" @click="toggleMatch(false)"
          class="w-12 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <font-awesome-icon icon="fa-lock" class="w-6 h-6" />
        </button>
        <button v-if="!isLocked" type="button" @click="toggleMatch(true)"
          class="w-12 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <font-awesome-icon icon="fa-lock-open" class="w-6 h-6" />
        </button>
      </div>
    </div>
    <div v-if="isMatchOpened" class="flex flex-col justify-center items-center text-center">
      <div class="self-register pt-5">
        <label class="swap swap-rotate border-red border-b w-32 h-32 group"
          :class="isLocked ? 'cursor-default' : 'cursor-pointer'">
          <input type="checkbox" class="theme-controller sr-only" :disabled="isLocked"
            @change="toggleCurrentPlayer($event.target.checked)" :checked="currentPlayer.is_registered" />
          <svg class="fill-[#1cc88a] swap-on h-32 w-32 group-hover:fill-green-500" viewBox="0 0 15 15" version="1.1"
            id="soccer" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11,1.5C11,2.3284,10.3284,3,9.5,3S8,2.3284,8,1.5S8.6716,0,9.5,0S11,0.6716,11,1.5z M11,11c-0.5523,0-1,0.4477-1,1&#xA;&#x9;s0.4477,1,1,1s1-0.4477,1-1S11.5523,11,11,11z M12.84,6.09l-1.91-1.91l0,0C10.8399,4.0675,10.7041,4.0014,10.56,4H3.5&#xA;&#x9;C3.2239,4,3,4.2239,3,4.5S3.2239,5,3.5,5h2.7L3,11.3l0,0c-0.0138,0.066-0.0138,0.134,0,0.2c-0.058,0.2761,0.1189,0.547,0.395,0.605&#xA;&#x9;C3.6711,12.163,3.942,11.9861,4,11.71l0,0L5,10h2l-1.93,4.24l0,0C5.0228,14.3184,4.9986,14.4085,5,14.5&#xA;&#x9;c-0.0552,0.2761,0.1239,0.5448,0.4,0.6c0.2761,0.0552,0.5448-0.1239,0.6-0.4l0,0l4.7-9.38l1.44,1.48&#xA;&#x9;c0.211,0.1782,0.5264,0.1516,0.7046-0.0593C13.0037,6.5523,13.0018,6.2761,12.84,6.09z" />
          </svg>
          <svg class="swap-off fill-gray-400 group-hover:fill-gray-500 h-32 w-32 text-gray-400" viewBox="0 0 1024 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M366.31713 744.766507h524.451937l-21.246617-303.632256c-0.003197 0-401.128207-0.147058-503.20532 303.632256z" />
            <path d="M943.262215 744.766507v159.84515h-863.16381v-159.84515h800.088914z" />
            <path
              d="M240.774749 499.8198c56.968811 0 103.16406 46.163279 103.16406 103.13209s-46.195248 103.16406-103.16406 103.16406-103.132091-46.195248-103.13209-103.16406 46.163279-103.132091 103.13209-103.13209z" />
            <path
              d="M80.098405 986.676157a22.378321 22.378321 0 0 1-22.378321-22.378321v-529.183353a22.378321 22.378321 0 1 1 44.756642 0v529.183353a22.378321 22.378321 0 0 1-22.378321 22.378321zM943.259018 986.676157a22.378321 22.378321 0 0 1-22.378321-22.378321v-305.400143a22.378321 22.378321 0 1 1 44.756642 0v305.400143c0 12.362424-10.015897 22.378321-22.378321 22.378321z" />
            <path
              d="M943.259018 767.148025h-863.16381a22.378321 22.378321 0 1 1 0-44.756642h863.16381a22.378321 22.378321 0 1 1 0 44.756642z" />
            <path
              d="M240.774749 728.494271c-69.206556 0-125.510412-56.316643-125.510411-125.542381 0-69.203359 56.303856-125.510412 125.510411-125.510411 69.222541 0 125.542381 56.303856 125.542381 125.510411 0 69.225738-56.31984 125.542381-125.542381 125.542381z m0-206.29615c-44.526465 0-80.75377 36.224108-80.753769 80.753769 0 44.545646 36.227305 80.785739 80.753769 80.785739 44.545646 0 80.785739-36.240092 80.785739-80.785739 0-44.529662-36.240092-80.75377-80.785739-80.753769zM371.879742 766.7612a22.378321 22.378321 0 0 1-22.378322-22.378321c0-82.607974 58.106909-166.216578 159.419962-229.390578 102.352046-63.819775 234.201917-98.966526 371.265937-98.966526a22.378321 22.378321 0 1 1 0 44.756642c-128.803222 0-252.242041 32.739484-347.586476 92.185895-87.918029 54.817296-138.34278 124.589704-138.34278 191.41137a22.378321 22.378321 0 0 1-22.378321 22.381518z" />
            <path
              d="M880.187319 767.148025a22.378321 22.378321 0 0 1-22.378321-22.378321v-306.362411a22.378321 22.378321 0 1 1 44.756642 0v306.362411a22.378321 22.378321 0 0 1-22.378321 22.378321zM477.665262 429.487934h-167.837408a22.378321 22.378321 0 0 1-12.317667-41.061023l105.552146-69.58379H309.827854a22.378321 22.378321 0 1 1 0-44.756642h167.837408a22.378321 22.378321 0 0 1 12.317667 41.061022l-105.552146 69.583791h93.234479a22.378321 22.378321 0 1 1 0 44.756642zM636.612082 205.704724h-103.004215a22.378321 22.378321 0 0 1-12.31447-41.061023l40.71256-26.841197h-28.39809a22.378321 22.378321 0 1 1 0-44.756642h103.004215a22.378321 22.378321 0 0 1 12.31447 41.061022l-40.712559 26.841198h28.398089a22.378321 22.378321 0 1 1 0 44.756642zM868.38755 136.491774h-87.0197a22.378321 22.378321 0 0 1-12.31447-41.061023l24.715257-16.28822h-12.400787a22.378321 22.378321 0 1 1 0-44.756642h87.0197a22.378321 22.378321 0 0 1 12.31447 41.061022l-24.715257 16.288221h12.400787a22.378321 22.378321 0 1 1 0 44.756642zM943.259018 926.993175h-863.16381a22.378321 22.378321 0 1 1 0-44.756642h863.16381a22.378321 22.378321 0 1 1 0 44.756642z" />
          </svg>
        </label>
      </div>
      <div class="yes-no bg-gray-400 text-white pl-1 pr-1 pt-1 pb-1 border rounded-md font-bold mb-2">
        <span><font-awesome-icon icon="fa-futbol" /> YES {{ getTotalYesNo().yes }} | <font-awesome-icon icon="fa-bed" />
          NO {{ getTotalYesNo().no }}</span>
      </div>
      <div class="player-list gap-1">
        <div v-for="player of playersList"
          class="player flex flex-row text-white md:w-72 w-full h-9 border rounded-md items-center"
          :class="player.is_registered ? 'bg-[#1cc88a]' : 'bg-gray-500'">
          <img :src="player.avatar" class="w-7 h-7 border rounded-full ml-1" />
          <span class="pl-2 pr-2">{{ player.name }}
          </span>
          <div class="ml-auto mr-1">
            <span>
              <font-awesome-icon v-if="player.is_default" icon="fa-flag" />
            </span>
            <label v-if="(player.email == currentPlayer.email || currentPlayer.role == 1) && !isLocked"
              class="swap swap-rotate ml-auto pl-4 pr-1 group" :class="isLocked ? 'cursor-default' : 'cursor-pointer'">
              <input type="checkbox" class="theme-controller sr-only" :checked="player.is_registered"
                v-model="player.is_registered" @change="updateMatchPlayers(player)" />
              <svg class="fill-white swap-on w-5 h-5 group-hover:fill-gray-300" viewBox="0 0 15 15" version="1.1"
                id="soccer" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11,1.5C11,2.3284,10.3284,3,9.5,3S8,2.3284,8,1.5S8.6716,0,9.5,0S11,0.6716,11,1.5z M11,11c-0.5523,0-1,0.4477-1,1&#xA;&#x9;s0.4477,1,1,1s1-0.4477,1-1S11.5523,11,11,11z M12.84,6.09l-1.91-1.91l0,0C10.8399,4.0675,10.7041,4.0014,10.56,4H3.5&#xA;&#x9;C3.2239,4,3,4.2239,3,4.5S3.2239,5,3.5,5h2.7L3,11.3l0,0c-0.0138,0.066-0.0138,0.134,0,0.2c-0.058,0.2761,0.1189,0.547,0.395,0.605&#xA;&#x9;C3.6711,12.163,3.942,11.9861,4,11.71l0,0L5,10h2l-1.93,4.24l0,0C5.0228,14.3184,4.9986,14.4085,5,14.5&#xA;&#x9;c-0.0552,0.2761,0.1239,0.5448,0.4,0.6c0.2761,0.0552,0.5448-0.1239,0.6-0.4l0,0l4.7-9.38l1.44,1.48&#xA;&#x9;c0.211,0.1782,0.5264,0.1516,0.7046-0.0593C13.0037,6.5523,13.0018,6.2761,12.84,6.09z" />
              </svg>
              <svg class="fill-white swap-off w-5 h-5 group-hover:fill-gray-300" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M366.31713 744.766507h524.451937l-21.246617-303.632256c-0.003197 0-401.128207-0.147058-503.20532 303.632256z" />
                <path d="M943.262215 744.766507v159.84515h-863.16381v-159.84515h800.088914z" />
                <path
                  d="M240.774749 499.8198c56.968811 0 103.16406 46.163279 103.16406 103.13209s-46.195248 103.16406-103.16406 103.16406-103.132091-46.195248-103.13209-103.16406 46.163279-103.132091 103.13209-103.13209z" />
                <path
                  d="M80.098405 986.676157a22.378321 22.378321 0 0 1-22.378321-22.378321v-529.183353a22.378321 22.378321 0 1 1 44.756642 0v529.183353a22.378321 22.378321 0 0 1-22.378321 22.378321zM943.259018 986.676157a22.378321 22.378321 0 0 1-22.378321-22.378321v-305.400143a22.378321 22.378321 0 1 1 44.756642 0v305.400143c0 12.362424-10.015897 22.378321-22.378321 22.378321z" />
                <path
                  d="M943.259018 767.148025h-863.16381a22.378321 22.378321 0 1 1 0-44.756642h863.16381a22.378321 22.378321 0 1 1 0 44.756642z" />
                <path
                  d="M240.774749 728.494271c-69.206556 0-125.510412-56.316643-125.510411-125.542381 0-69.203359 56.303856-125.510412 125.510411-125.510411 69.222541 0 125.542381 56.303856 125.542381 125.510411 0 69.225738-56.31984 125.542381-125.542381 125.542381z m0-206.29615c-44.526465 0-80.75377 36.224108-80.753769 80.753769 0 44.545646 36.227305 80.785739 80.753769 80.785739 44.545646 0 80.785739-36.240092 80.785739-80.785739 0-44.529662-36.240092-80.75377-80.785739-80.753769zM371.879742 766.7612a22.378321 22.378321 0 0 1-22.378322-22.378321c0-82.607974 58.106909-166.216578 159.419962-229.390578 102.352046-63.819775 234.201917-98.966526 371.265937-98.966526a22.378321 22.378321 0 1 1 0 44.756642c-128.803222 0-252.242041 32.739484-347.586476 92.185895-87.918029 54.817296-138.34278 124.589704-138.34278 191.41137a22.378321 22.378321 0 0 1-22.378321 22.381518z" />
                <path
                  d="M880.187319 767.148025a22.378321 22.378321 0 0 1-22.378321-22.378321v-306.362411a22.378321 22.378321 0 1 1 44.756642 0v306.362411a22.378321 22.378321 0 0 1-22.378321 22.378321zM477.665262 429.487934h-167.837408a22.378321 22.378321 0 0 1-12.317667-41.061023l105.552146-69.58379H309.827854a22.378321 22.378321 0 1 1 0-44.756642h167.837408a22.378321 22.378321 0 0 1 12.317667 41.061022l-105.552146 69.583791h93.234479a22.378321 22.378321 0 1 1 0 44.756642zM636.612082 205.704724h-103.004215a22.378321 22.378321 0 0 1-12.31447-41.061023l40.71256-26.841197h-28.39809a22.378321 22.378321 0 1 1 0-44.756642h103.004215a22.378321 22.378321 0 0 1 12.31447 41.061022l-40.712559 26.841198h28.398089a22.378321 22.378321 0 1 1 0 44.756642zM868.38755 136.491774h-87.0197a22.378321 22.378321 0 0 1-12.31447-41.061023l24.715257-16.28822h-12.400787a22.378321 22.378321 0 1 1 0-44.756642h87.0197a22.378321 22.378321 0 0 1 12.31447 41.061022l-24.715257 16.288221h12.400787a22.378321 22.378321 0 1 1 0 44.756642zM943.259018 926.993175h-863.16381a22.378321 22.378321 0 1 1 0-44.756642h863.16381a22.378321 22.378321 0 1 1 0 44.756642z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <span class="text-lg font-bold">Freelancers</span>
      </div>
      <div v-for="n in totalFreelanceRow" class="flex flex-row gap-2 mb-1 w-80" :class="isLocked ? 'justify-center' : ''">
        <input v-model="freelancerList[n - 1]" type="text" :disabled="isLocked"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <button v-if="totalFreelanceRow > 0 & !isLocked" type="button" @click="removeFreelanceRow(n)"
          class="enabled:bg-blue-700 w-10 h-10 text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <font-awesome-icon icon="fa-minus" class="w-4 h-4" />
        </button>
        <button v-if="n == totalFreelanceRow && !isLocked" :disabled="!freelancerList[n - 1]" type="button" @click="addFreelanceRow"
          class="enabled:bg-blue-700 w-10 h-10 text-white bg-gray-400 enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm enabled:dark:bg-blue-600 enabled:dark:hover:bg-blue-700 focus:outline-none enabled:dark:focus:ring-blue-800">
          <font-awesome-icon icon="fa-plus" class="w-4 h-4" />
        </button>
      </div>
      <div class="mb-12"></div>
    </div>
    <div v-if="!isMatchOpened && !isLoading"
      class="flex flex-col justify-center items-center text-5xl text-gray-500 mt-36 text-center">
      <p>Match hasn't been created yet!</p>
      <p>Please contact admin</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const totalFreelanceRow = ref(1)
const freelancerList = ref([])
const isLocked = ref(false)
const isMatchOpened = ref(false)
const isLoading = ref(true)

const toggleMatch = (value) => {
  isLocked.value = value
  emit('locked', value)
}

const toggleCurrentPlayer = async (isChecked) => {
  isLoading.value = true
  playersList.value.find(pl => pl.email == currentPlayer.value.email).is_registered = isChecked;
  currentPlayer.value.is_registered = isChecked
  await addPlayersToMatch(playersList.value.filter(player => player.is_registered === true), moment(date.value).format('DD/MM/YYYY'));
  isLoading.value = false
}

const setDate = async (value) => {
  isLoading.value = true
  await updateDefaultPlayers(moment(value).format('ddd'))
  isMatchOpened.value = await isMatchExist(moment(value).format('DD/MM/YYYY'))
  await fetchRegisteredPlayers(moment(value).format('DD/MM/YYYY'))
  await updateRegisteredPlayers(registeredPlayersList.value)
  await fetchFreelancers(moment(date.value).format('DD/MM/YYYY'))
  if (matchFreelancersList.value?.length > 0) {
    freelancerList.value = matchFreelancersList.value;
    totalFreelanceRow.value = freelancerList.value.length
  }
  isLoading.value = false
}

const addFreelanceRow = async () => {
  isLoading.value = true
  totalFreelanceRow.value = totalFreelanceRow.value + 1
  await addFreelancersToMatch(freelancerList.value, moment(date.value).format('DD/MM/YYYY'))
  isLoading.value = false
}

const removeFreelanceRow = async (idx) => {
  isLoading.value = true
  if (totalFreelanceRow.value > 0) {
    totalFreelanceRow.value = totalFreelanceRow.value - 1
    freelancerList.value.splice(idx - 1, 1)
    await addFreelancersToMatch(freelancerList.value, moment(date.value).format('DD/MM/YYYY'))
  }
  if (totalFreelanceRow.value == 0) {
    totalFreelanceRow.value = 1
  }
  isLoading.value = false
}

const updateMatchPlayers = async (player) => {
  isLoading.value = true
  await addPlayersToMatch(playersList.value.filter(player => player.is_registered === true), moment(date.value).format('DD/MM/YYYY'));
  if (player.email == currentPlayer.value.email) {
    currentPlayer.value.is_registered = player.is_registered
  }
  isLoading.value = false
}

const addMatch = async () => {
  isLoading.value = true
  await createMatch(moment(date.value).format('DD/MM/YYYY'))
  await addPlayersToMatch(playersList.value.filter(player => player.is_registered === true), moment(date.value).format('DD/MM/YYYY'));
  isMatchOpened.value = true
  isLoading.value = false
}

const deleteCurrentMatch = async () => {
  if (confirm("Are you sure to delete this match?")) {
    isLoading.value = true
    await deleteMatch(moment(date.value).format('DD/MM/YYYY'))
    await fetchMatches()
    isMatchOpened.value = await isMatchExist(moment(date.value).format('DD/MM/YYYY'))
    isLoading.value = false
  }
}

const getTotalYesNo = () => {
  const yes = playersList.value.filter(player => player.is_registered === true);
  const no = playersList.value.filter(player => player.is_registered === false);
  const freelance = freelancerList.value.length ? freelancerList.value.length : 0;
  return { yes: yes.length + freelance, no: no.length }
}
const today = ref(new Date()); 
const date = ref(new Date(today.value.getTime() + (24 * 60 * 60 * 1000)));

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

onMounted(async () => {
  isLoading.value = true
  await fetchMatches()
  isMatchOpened.value = await isMatchExist(moment(date.value).format('DD/MM/YYYY'))
  await fetchPlayers()
  await fetchRegisteredPlayers(moment(date.value).format('DD/MM/YYYY'))
  await fetchFreelancers(moment(date.value).format('DD/MM/YYYY'))
  await updateDefaultPlayers(moment(date).format('ddd'))
  await updateRegisteredPlayers(registeredPlayersList.value)
  if (matchFreelancersList.value?.length > 0) {
    freelancerList.value = matchFreelancersList.value;
    totalFreelanceRow.value = freelancerList.value.length
  }
  isLoading.value = false
  currentPlayer.value.is_registered = playersList.value.find(pl => pl.email == currentPlayer.value.email).is_registered
})

const openDatePicker = () => {
  console.log('sdfsdf', datepicker.value)
  datepicker.value.openMenu()
}

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import moment from 'moment'
import { storeToRefs } from 'pinia';
import type { DatePickerInstance } from "@vuepic/vue-datepicker"

const playersStore = usePlayersStore();
const matchesStore = useMatchesStore();
const { fetchMatches, isMatchExist, addPlayersToMatch, createMatch, fetchRegisteredPlayers, fetchFreelancers, addFreelancersToMatch, deleteMatch } = matchesStore;
const { fetchPlayers, updateDefaultPlayers, updateRegisteredPlayers } = playersStore;
const { playersList, currentPlayer } = storeToRefs(playersStore);
const { registeredPlayersList, matchFreelancersList } = storeToRefs(matchesStore);
const datepicker = ref<DatePickerInstance>(null);
const emit = defineEmits(['locked'])
</script>

<style>
.dp-custom-input {
  color: white;
  background-color: #4e73df;
  height: 40px;
}</style>