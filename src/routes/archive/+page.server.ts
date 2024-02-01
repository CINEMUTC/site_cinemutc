import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { data } = await supabase.from("films").select().order('id', { ascending: true });
  return {
    films: data ?? [],
  };
};

