import type { PageServerLoad } from './$types';
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ params }) => {
	return {
        post: await supabase.from("films").select().eq('tmdb_id', params.id),
	};
};