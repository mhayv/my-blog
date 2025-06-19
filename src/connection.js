import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://llmcxzekzoyggaxjrhfx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbWN4emVrem95Z2dheGpyaGZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMDQ5NzQsImV4cCI6MjA2NTY4MDk3NH0.5cDZl4VjnL6zg1cFiNVRTiHi3cjh72_PcZlgqiP0V4M'

export const supabase = createClient(supabaseUrl, supabaseKey)
