import {getBlogsMetadata} from '../../utils/mdx.utils';
import {IBlogMetadata} from '../../models/mdxFiles';

export const GET = async () => {
  const blogs = (await getBlogsMetadata()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return new Response(getRssXml(blogs), {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
};

const blogPostsRssXml = (blogPosts: IBlogMetadata[]) => {
  let latestPostDate: string = '';
  let rssItemsXml = '';
  blogPosts.forEach(post => {
    const postDate = Date.parse(post.date);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date;
    }
    rssItemsXml += `
        <item>
          <title>${post.title}</title>
          <link>
            https://carlogino.com/blog/${post.slug}
          </link>
  
          <pubDate>${post.date}</pubDate>
          <description>
          <![CDATA[${post.description}]]>
          </description>
      </item>`;
  });
  return {
    rssItemsXml,
    latestPostDate,
  };
};

const getRssXml = (blogPosts: IBlogMetadata[]) => {
  const {rssItemsXml, latestPostDate} = blogPostsRssXml(blogPosts);
  return `<?xml version="1.0" ?>
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
          <title>Blogs by Code Gino</title>
          <link>https://carlogino.com/</link>
          <description>Code Gino Blogs</description>
          <language>en</language>
          <lastBuildDate>${latestPostDate}</lastBuildDate>
          ${rssItemsXml}
      </channel>
    </rss>`;
};
