import { defineStore } from "pinia";

export const useMatchesStore = defineStore({
  id: "matches-store",
  state: () => {
    return {
      matchesList: [{}],
      registeredPlayersList: [],
      matchFreelancersList: []
    };
  },
  actions: {
    async createMatch(date) {
      const { data, error } = await useSupabaseClient()
        .from("matches")
        .insert([
          {
            date: date
          }
        ])
      if (error) {
        throw error;
      }
    },
    async fetchMatches() {
      const { data, error } = await useSupabaseClient()
        .from("matches")
        .select("*");
      if (error) {
        throw error;
      }
      if (data) {
        this.matchesList = data;
      }
    },
    async isMatchExist(matchDate: string) {
      return this.matchesList.filter(
        (match) => match.date === matchDate
      ).length>0
    },
    async addPlayersToMatch(players, matchDate) {
      await this.fetchMatches()
      const matchId = this.matchesList.find(match =>
        match.date === matchDate
      ).id
      const playerIds = players.map((player) => player.id);
      const { data, error } = await useSupabaseClient()
        .from("matches")
        .update({ players: playerIds })
        .eq("id", matchId)
        .select();
    },
    async fetchRegisteredPlayers(matchDate: string) {
      this.registeredPlayersList = this.matchesList.find(match =>
        match.date === matchDate
      )?.players
    },
    async fetchFreelancers(matchDate: string) {
      this.matchFreelancersList = this.matchesList.find(match =>
        match.date === matchDate
      )?.freelancers
    },
    async addFreelancersToMatch(freelancers, matchDate) {
      await this.fetchMatches()
      const matchId = this.matchesList.find(match =>
        match.date === matchDate
      ).id
      const { data, error } = await useSupabaseClient()
        .from("matches")
        .update({ freelancers: freelancers.filter(n => n) })
        .eq("id", matchId)
        .select();
    },
    async deleteMatch(matchDate) {
      const { data, error } = await useSupabaseClient()
        .from("matches")
        .delete()
        .eq("date", matchDate)
        .select();
      if(error) {
        throw error;
      }
    }
  },
  getters: {},
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMatchesStore, import.meta.hot));
}
