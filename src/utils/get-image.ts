const supabaseHost = 'https://wqxykwsooyvgyappeyat.supabase.co';

export function getImageUrl(
  imageName: string,
  prefix = 'static_assets',
): string {
  return `${supabaseHost}/storage/v1/object/public/${prefix}/${imageName}`;
}
