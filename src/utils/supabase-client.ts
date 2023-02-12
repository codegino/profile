import {createClient} from '@supabase/supabase-js';

const SUPABASE_KEY = process.env.SUPABASE_KEY as string;
const SUPABASE_URL = process.env.SUPABASE_URL as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
