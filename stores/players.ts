import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

export const useMyPlayersStore = defineStore({
  id: 'players',
  state: () => ({ }),
  actions: {}

  const supabase = createClient('https://mkkpewseyhbbhrydwxus.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ra3Bld3NleWhiYmhyeWR3eHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NzkzMzgsImV4cCI6MjAxNzQ1NTMzOH0.EL1tz4ePAaPYiME_PN2WAJoQX-IQ9gnuENlLepvcELY')

  async function fetchPlayers() {
    const {data, error} = await supabase.from('players').select('*')
  }
})
