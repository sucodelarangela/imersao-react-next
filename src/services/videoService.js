import { createClient } from "@supabase/supabase-js";

// SUPABASE CLIENT
const PROJECT_URL = 'https://gfpeazzijxwpjymtssze.supabase.co';
const PUBLIC_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmcGVhenppanh3cGp5bXRzc3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyOTU2MzMsImV4cCI6MTk4Mzg3MTYzM30.AGA-9Gzh9hj01SSfL9noAxRQWLh91EoSpHkeoBn7Mko';
const supabase = createClient(PROJECT_URL, PUBLIC_ANON_KEY);


export function videoService() {
  return {
    getAllVideos() {
      return supabase.from('video')
        .select('*'); // * select all
    }
  };
}