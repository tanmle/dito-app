<template>
  <div class="pl-3">
    <div class="match w-auto flex flex-row">
      <div class="flex flex-col max-md:basis-full basis-1/3">
        <p class="text-xl text-gray-500 pb-3">Today {{ moment().format('ddd, DD MMM') }}</p>
        <div class="flex flex-row gap-2 items-center justify-center">
          <div class="date-picker flex flex-row gap-2">
            <div class="w-40">
              <VueDatePicker input-class-name="dp-custom-input" v-model="date" :preview-format="format" :format="format"
                :enable-time-picker="false" auto-apply :clearable="false"></VueDatePicker>
            </div>
            <button type="button"
              class="w-10 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <font-awesome-icon icon="fa-trash-can" class="w-6 h-6" />
            </button>
            <button type="button"
              class="w-10 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <font-awesome-icon icon="fa-lock" class="w-6 h-6" />
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="self-register pt-5">
            <label class="swap swap-rotate border-red border-b w-32 h-32">
              <input type="checkbox" class="theme-controller sr-only" />
              <font-awesome-icon icon="fa-futbol" class="swap-on fill-current text-9xl text-[#1cc88a]" />
              <font-awesome-icon icon="fa-bed" class="swap-off fill-current text-9xl text-gray-400" />
            </label>
          </div>
          <div class="yes-no bg-gray-400 text-white pl-1 pr-1 pt-1 pb-1 border rounded-md font-bold mb-2">
            <span><font-awesome-icon icon="fa-futbol" /> YES {{ getTotalYesNo().yes }} | <font-awesome-icon icon="fa-bed" />
              NO {{ getTotalYesNo().no }}</span>
          </div>
          <div class="player-list gap-1">
            <div v-for="player of players"
              class="player flex flex-row text-white md:w-72 w-full h-9 border rounded-md items-center"
              :class="player.isRegistered ? 'bg-[#1cc88a]' : 'bg-gray-500'">
              <img :src="player.avatar" class="w-7 h-7 border rounded-full ml-1" />
              <span class="pl-2 pr-2">{{ player.name }}
              </span>
              <div class="ml-auto">
                <span>
                  <font-awesome-icon v-if="player.isDefault" icon="fa-flag" />
                </span>
                <label class="swap swap-rotate ml-auto pl-4 pr-1">
                  <input type="checkbox" class="theme-controller sr-only" :checked="player.isDefault"
                    v-model="player.isRegistered" />
                  <font-awesome-icon icon="fa-futbol" class="swap-on fill-current" />
                  <font-awesome-icon icon="fa-bed" class="swap-off fill-current" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const players = ref([
  {
    avatar: "/_nuxt/assets/images/dito.png",
    name: "Tan Le",
    isDefault: true,
    isRegistered: true,
  },
  {
    avatar: "/_nuxt/assets/images/ball.png",
    name: "Dinh Nguyen",
    isDefault: false,
    isRegistered: false,
  },
  {
    avatar: "/_nuxt/assets/images/ball.png",
    name: "Dinh Nguyen",
    isDefault: false,
    isRegistered: false,
  },
  {
    avatar: "/_nuxt/assets/images/ball.png",
    name: "Dinh Nguyen",
    isDefault: false,
    isRegistered: false,
  }
])

const getTotalYesNo = () => {
  const yes = players.value.filter(player => player.isRegistered === true);
  const no = players.value.filter(player => player.isRegistered === false);
  return { yes: yes.length, no: no.length }
}
const date = ref(new Date());

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import moment from 'moment'
</script>

<style lang="scss">
.dp-custom-input {
  color: white;
  background-color: #4e73df;
  height: 40px;
}</style>