<template>
   <div>
      <aside id="logo-sidebar"
         class="bg-[#4e73df] fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
         aria-label="Sidebar">
         <div class="h-24">
            <RouterLink to="/match">
               <img src="~/assets/images/dito.png" class="h-20 block mx-auto" alt="DITO Logo" />
            </RouterLink>
         </div>
         <hr class="pt-4 mt-4 opacity-30">
         <div class="h-full px-3 pb-4 overflow-y-auto bg-[#4e73df] dark:bg-gray-800 text-white">
            <ul class="space-y-2 font-light text-sm">
               <li>
                  <RouterLink to="/match"
                     class="flex items-center p-2 text-white rounded-lg dark:text-white hover:font-bold dark:hover:bg-gray-700 group">
                     <font-awesome-icon icon="fa-futbol" class="w-5 h-5" />
                     <span class="flex-1 ms-3 whitespace-nowrap">Match</span>
                  </RouterLink>
               </li>
               <li>
                  <RouterLink to="/penalties"
                     class="flex items-center p-2 text-white rounded-lg dark:text-white hover:font-bold dark:hover:bg-gray-700 group">
                     <font-awesome-icon icon="fa-gavel" class="w-5 h-5" />
                     <span class="flex-1 ms-3 whitespace-nowrap">Penalties</span>
                  </RouterLink>
               </li>
               <li>
                  <RouterLink to="/finance"
                     class="flex items-center p-2 text-white rounded-lg dark:text-white hover:font-bold dark:hover:bg-gray-700 group">
                     <font-awesome-icon icon="fa-dollar-sign" class="w-5 h-5" />
                     <span class="flex-1 ms-3 whitespace-nowrap">Finance</span>
                  </RouterLink>
               </li>
            </ul>
            <ul
               class="pt-4 mt-4 space-y-2 font-light text-sm border-t border-white border-opacity-30 dark:border-gray-700">
               <span class="font-bold opacity-40 text-xs">Settings</span>
               <li>
                  <RouterLink to="/players_settings"
                     class="flex items-center p-2 text-white rounded-lg dark:text-white hover:font-bold dark:hover:bg-gray-700 group">
                     <font-awesome-icon icon="fa-users-gear" class="w-5 h-5" />
                     <span class="flex-1 ms-3 whitespace-nowrap">Players</span>
                  </RouterLink>
               </li>
               <li>
                  <RouterLink to="/match_settings"
                     class="flex items-center p-2 text-white rounded-lg dark:text-white hover:font-bold dark:hover:bg-gray-700 group">
                     <font-awesome-icon icon="fa-gears" class="w-5 h-5" />
                     <span class="flex-1 ms-3 whitespace-nowrap">Match</span>
                  </RouterLink>
               </li>

            </ul>
         </div>
   </aside>
</div></template>

<script setup>
</script>