import fs from 'fs';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import {IBlogMetadata} from '../models/blog';
import {getBlogsMetadata} from '../utils/blogs-mdx.utils';

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
          https://codegino.com/blog/${post.slug}
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
        <link>https://codegino.com/</link>
        <description>Code Gino Blogs</description>
        <language>en</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

export default function Rss({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({res}) => {
  const blogs = (await getBlogsMetadata()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  res.setHeader('Content-Type', 'text/xml');
  res.write(getRssXml(blogs));
  res.end();

  return {
    props: {
      blogs,
    },
  };
};

export async function generateRssFeed() {
  const blogs = (await getBlogsMetadata()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const feed = getRssXml(blogs);

  fs.writeFileSync('public/rss.xml', getRssXml(blogs));
}
