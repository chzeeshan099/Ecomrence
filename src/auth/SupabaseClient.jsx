import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jhswapltbycookpwhtck.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impoc3dhcGx0Ynljb29rcHdodGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwODQyODksImV4cCI6MjAzNzY2MDI4OX0.-QEKEkga1tWrlIFEs-Hq2yO2aYGNMb5uq9JcBcBtNkg';
export const supabase = createClient(supabaseUrl, supabaseKey)
