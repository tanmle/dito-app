import { defineStore } from 'pinia'

export const useAvatarsStore = defineStore({
  id: 'avatars-store',
  state: () => {
    return {
      avatarsList: [],
      currentAvatar: ''
    }
  },
  actions: {
    async deleteAvatar(playerId) {
      const listFiles = await useSupabaseClient()
      .storage
      .from('avatar')
      .list('')
      const filesName = listFiles.data.map(file => file.name).filter(file => file.startsWith(`${playerId}.`))
      const { data, error } = await useSupabaseClient()
      .storage
      .from('avatar')
      .remove(filesName)
    },
    async uploadAvatar(playerId, file) {
      const { data, error } = await useSupabaseClient()
      .storage
      .from('avatar')
      .upload(`${playerId}.${file.name.split('.').pop()}`, file, {
        cacheControl: '3600',
        upsert: false
      })
    },
    async fetchPlayerAvatar(avatarFileName) {
      const { data } = await useSupabaseClient()
      .storage
      .from('avatar')
      .getPublicUrl(avatarFileName)
      this.currentAvatar = data.publicUrl
    }
  }
})
