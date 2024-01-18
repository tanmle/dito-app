import { defineStore } from "pinia";

export const usePlayersStore = defineStore({
  id: "players-store",
  state: () => {
    return {
      playersList: [{}],
      currentPlayer: [],
    };
  },
  actions: {
    async fetchPlayers() {
      const { data, error } = await useSupabaseClient()
        .from("players")
        .select("*");
      if (error) {
        throw error;
      }
      if (data) {
        this.playersList = data;
      }
    },
    async fetchCurrentPlayer(email: string) {
      const { data, error } = await useSupabaseClient()
        .from("players")
        .select()
        .eq('email', email)
      if (error) {
        throw error;
      }
      else 
      {
        this.currentPlayer = data[0];
      }
    },
    async updateDefaultPlayers(matchDate: string) {
      const defaultProp = `is_${matchDate.toLowerCase()}_default`;
      for (const player of this.playersList) {
        player.is_registered = player[defaultProp];
        player.is_default = player[defaultProp];
      }
    },
    async updateRegisteredPlayers(playerIds) {
      if(playerIds) {
        this.playersList.forEach(player => {
          player.is_registered = playerIds.map(Number).includes(player.id);
        });
      }
    },
    async updatePlayerAvatar(playerId, avatarFileName) {
      const { data, error } = await useSupabaseClient()
        .from("players")
        .update({ avatar: avatarFileName })
        .eq("id", playerId)
        .select();
    }
  },
  getters: {},
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlayersStore, import.meta.hot));
}
