<template>
  <div class="md:ml-64 h-[76px]">
    <nav class="fixed max-md:w-full top-0 z-50 right-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex justify-center items-center content-center">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:font-bold focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
             </button>
          </div>
          <div class="flex items-center">
              <div class="flex items-center ms-3">
                <div>
                  <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" :src="currentPlayer.avatar" alt="user photo">
                  </button>
                </div>
                <div class="z-50 w-[11rem] hidden my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <div class="px-4 py-3" role="none">
                    <p class="text-sm text-gray-700 dark:text-white" role="none">
                      {{currentPlayer.name}}
                      <span class="bg-green-100 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-green-100">Striker</span>
                    </p>
                    <p class="text-sm font-medium text-gray-700 truncate dark:text-gray-300" role="none">
                      {{currentPlayer.email}}
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a @click="openAccountSettings" class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:font-bold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <font-awesome-icon icon="fa-gear" class="w-5 h-5"/>Account Settings</a>
                    </li>
                    <li>
                      <a class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:font-bold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <font-awesome-icon icon="fa-lock" class="w-5 h-5"/>Change Password</a>
                    </li>
                    <li>
                      <a @click="logout" class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:font-bold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <font-awesome-icon icon="fa-circle-left" class="w-5 h-5"/>Sign out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </nav>
  </div>
  <AccountSettings :show="isAccountSettingsOpen" @closeModal="openAccountSettings" :currentPlayer="currentPlayer"></AccountSettings>
</template>

<script setup>
import AccountSettings from '~/components/modal/AccountSettings.vue'
const playersStore = usePlayersStore();
const avatarsStore = useAvatarsStore();
const { fetchCurrentPlayer } = playersStore;
const { fetchPlayerAvatar } = avatarsStore;
const { currentPlayer } = storeToRefs(playersStore);
const { currentAvatar } = storeToRefs(avatarsStore);
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const isAccountSettingsOpen = ref(false)

onMounted(async () => {
  await fetchCurrentPlayer(user.value.email);
})

const openAccountSettings = () => {
  isAccountSettingsOpen.value = !isAccountSettingsOpen.value
}

async function logout() {
  const {error} = await supabase.auth.signOut();
  if(error) {
    alert(error)
    return
  }
  else {
    navigateTo('/login')
  }
}
</script>