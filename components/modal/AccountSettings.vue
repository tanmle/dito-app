<template>
    <TransitionRoot appear :show="false" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all relative rounded-2xl h-auto">
                            <div
                                class="w-full px-8 py-4 border-b border-stone-300 justify-between items-center inline-flex">
                                <div class="justify-start items-center gap-6 flex">
                                    <div class="text-zinc-800 text-2xl font-semibold leading-9">
                                        Account Settings
                                    </div>
                                </div>
                                <font-awesome-icon class="w-2.5 h-2.5 mr-1.5 cursor-pointer" aria-hidden="true" icon="fa-x"
                                    @click="closeModal" />
                            </div>
                            <div class="flex py-0 px-6 flex-col self-start gap-2 items-center" id="content">
                                <div id="mainContent" class="flex flex-col self-start gap-4 w-full mt-2">
                                    <div class="flex flex-col justify-center gap-2 w-full items-center">
                                        <img class="rounded-full w-20 h-20 border cursor-pointer" :src="currentPlayer.avatar" @click="avatarUpload.open"
                                            alt="User avatar" />
                                        <div class="flex gap-2 flex-col items-center">
                                            <div class="flex items-center gap-[10px]">
                                                <span class="text-gray-800 text-2xl font-bold">{{ currentPlayer.name
                                                }}</span>
                                                <span
                                                    class="bg-green-100 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-green-100">Striker</span>
                                            </div>
                                            <div class="flex py-[2px] px-[10px] justify-center items-center gap-1">
                                                <span
                                                    class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                                                    {{ currentPlayer.role == 1 ? "Admin" : "Member" }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="profileContent" class="flex flex-col gap-4 items-center">
                                        <div class="flex gap-4 flex-col md:flex-row">
                                            <div class="flex flex-col gap-2 md:w-1/2">
                                                <label class="text-sm font-medium text-center">Full Name</label>
                                                <input type="text"
                                                    class="max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Your full name..." v-model="currentPlayer.name" />
                                            </div>
                                            <div class="flex flex-col gap-2 md:w-1/2">
                                                <label class="text-sm font-medium text-center">Email</label>
                                                <input type="text"
                                                    class="max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Your email..." v-model="currentPlayer.email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="defaultSettingsHeader"
                                        class="items-center gap-6 pt-4 border-t border-gray-300">
                                        <span class="text-lg font-bold">Settings</span>
                                    </div>
                                    <div id="apiContent" class="flex flex-col gap-4">
                                        <div class="flex gap-4">
                                            <div class="flex flex-col gap-2 w-full">
                                                <label class="text-sm font-medium">Default</label>
                                                <div class="flex flew-row">
                                                    <div class="flex items-center me-4">
                                                        <input id="mon-checkbox" type="checkbox" value="" :checked="currentPlayer.is_mon_default"
                                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                        <label for="inline-checkbox"
                                                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mon</label>
                                                    </div>
                                                    <div class="flex items-center me-4">
                                                        <input id="tue-checkbox" type="checkbox" value="" :checked="currentPlayer.is_tue_default"
                                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                        <label for="mon-checkbox"
                                                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tue</label>
                                                    </div>
                                                    <div class="flex items-center me-4">
                                                        <div class="flex items-center me-4">
                                                            <input id="wed-checkbox" type="checkbox" value="" :checked="currentPlayer.is_wed_default"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                            <label for="wed-checkbox"
                                                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wed</label>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center me-4">
                                                        <div class="flex items-center me-4">
                                                            <input id="thu-checkbox" type="checkbox" value="" :checked="currentPlayer.is_thu_default"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                            <label for="thu-checkbox"
                                                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thu</label>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center me-4">
                                                        <div class="flex items-center me-4">
                                                            <input id="fri-checkbox" type="checkbox" value="" :checked="currentPlayer.is_fri_default"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                            <label for="fri-checkbox"
                                                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fri</label>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center me-4">
                                                        <div class="flex items-center me-4">
                                                            <input id="sat-checkbox" type="checkbox" value="" :checked="currentPlayer.is_sat_default"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                            <label for="sat-checkbox"
                                                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sat</label>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center me-4">
                                                        <div class="flex items-center me-4">
                                                            <input id="sun-checkbox" type="checkbox" value="" :checked="currentPlayer.is_sun_default"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                            <label for="sun-checkbox"
                                                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sun</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="flex my-4 mx-10 justify-end items-start gap-4">
                                    <button type="button" @click="closeModal"
                                        class="text-gray-900 bg-white border-[1px] hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 outline-none">
                                        Cancel
                                    </button>
                                    <button type="button"
                                        class="text-white bg-[#1775BF] border-solid border-[1px] border-blue-800 focus:outline-none hover:bg-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { useFileDialog } from "@vueuse/core";
const avatarUpload = useFileDialog({
    accept: 'image/jpeg,image/png,image/gif'
})
const emit = defineEmits(["closeModal"]);
const props = defineProps({
    currentPlayer: {
        type: Object,
        required: true
    }
})
function closeModal() {
    emit('closeModal')
}

avatarUpload.onChange((files) => { 
    props.currentPlayer.avatar = files[0]
    console.log('files[0]', files[0])
})
</script>
  