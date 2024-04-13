import { createClient } from '@supabase/supabase-js';

// Replace 'your-supabase-url' with your actual Supabase URL
const supabaseUrl = 'https://ymcyxrqswznfqiewnvak.supabase.co';

// Replace 'your-supabase-anon-key' with your actual Supabase anonymous key
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltY3l4cnFzd3puZnFpZXdudmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5Njc1MDQsImV4cCI6MjAyODU0MzUwNH0.-QCt9t7cSav4WvpW-_NJ8_D15eXspvRWAe6lpkxITyA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
