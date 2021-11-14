import {blurImage} from './image-blur.utils';
import {supabase} from './supabaseClient';

export async function getImageFromSupabase(key: string) {
  let {data: imgSrc} = await supabase
    .from('static_content')
    .select('content')
    .eq('key', key)
    .single();

  return blurImage(imgSrc.content);
}

export async function getUrlFromSupabase(key: string) {
  let {data: imgSrc} = await supabase
    .from('static_content')
    .select('content')
    .eq('key', key)
    .single();

  return imgSrc.content ?? '';
}
