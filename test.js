import { readFile } from 'fs';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mkkpewseyhbbhrydwxus.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ra3Bld3NleWhiYmhyeWR3eHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NzkzMzgsImV4cCI6MjAxNzQ1NTMzOH0.EL1tz4ePAaPYiME_PN2WAJoQX-IQ9gnuENlLepvcELY')
var obj;
readFile('./data.json', 'utf8', async function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);

  Object.values(obj?.players || []).map(async (message) => {
    if(message.status===1) {
    console.log('email', message.email)
    console.log('level', message.level)
    console.log('role', message.role)
    console.log('name', message.name)
    console.log('status', message.status)
    console.log('is_match_pay', message.isMatchPay)
    console.log('is_mon_default', message.dow?.hasOwnProperty('2') ? message.dow['2'] : false)
    console.log('is_tue_default', message.dow?.hasOwnProperty('3') ? message.dow['3'] : false)
    console.log('is_wed_default', message.dow?.hasOwnProperty('4') ? message.dow['4'] : false)
    console.log('is_thu_default', message.dow?.hasOwnProperty('5') ? message.dow['5'] : false)
    console.log('is_fri_default', message.dow?.hasOwnProperty('6') ? message.dow['6'] : false)
    console.log('is_sat_default', message.dow?.hasOwnProperty('8') ? message.dow['7'] : false)
    console.log('is_sun_default', message.dow?.hasOwnProperty('7') ? message.dow['8'] : false)

        const aaaa = await supabase
    .from('players')
    .insert([
        { email: message.email, level: message.level, role:message.role, name:message.name, status: message.status,
            is_match_pay: message.isMatchPay, is_mon_default: message.dow?.hasOwnProperty('2') ? message.dow['2'] : false,
            is_tue_default: message.dow?.hasOwnProperty('3') ? message.dow['3'] : false,
            is_wed_default: message.dow?.hasOwnProperty('4') ? message.dow['4'] : false,
            is_thu_default: message.dow?.hasOwnProperty('5') ? message.dow['5'] : false,
            is_fri_default: message.dow?.hasOwnProperty('6') ? message.dow['6'] : false,
            is_sat_default: message.dow?.hasOwnProperty('7') ? message.dow['7'] : false,
            is_sun_default: message.dow?.hasOwnProperty('8') ? message.dow['8'] : false,
        },
    ])
    .select()
    console.log('aaaa', aaaa)
    }
  })
});