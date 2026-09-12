// Blog cover images all live in the same Supabase Storage bucket ("blog"),
// and the file name always matches the blog slug, so the URL is derived
// instead of mapped. To add a cover, upload `<slug>.jpg` to that bucket.
const BLOG_BUCKET_URL =
  'https://wqxykwsooyvgyappeyat.supabase.co/storage/v1/object/public/blog';

// Legacy covers uploaded before `.jpg` became the convention.
const PNG_SLUGS = new Set(['openai-nextjs-text-completion', 'screpy-review']);

/**
 * Public URL of a blog cover image.
 * Returns an empty string for drafts (unpublished blogs have no slug).
 */
export const getBlogBanner = (slug: string): string =>
  slug
    ? `${BLOG_BUCKET_URL}/${slug}.${PNG_SLUGS.has(slug) ? 'png' : 'jpg'}`
    : '';
