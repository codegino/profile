import {getPlaiceholder} from 'plaiceholder';
import {supabase} from './supabaseClient';

export async function getImageFromSupabase(key: string) {
  let {data: imgSrc} = await supabase
    .from('static_content')
    .select('content')
    .eq('key', key)
    .single();

  return await getPlaiceholder(imgSrc.content);
}

export async function getImageURLFromSupabase(key: string) {
  let {data: imgSrc} = await supabase
    .from('static_content')
    .select('content')
    .eq('key', key)
    .single();

  return imgSrc.content ?? '';
}
