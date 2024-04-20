import {blogAssets} from '@/data/blog-asset';
import {newCommonMetaTags} from '@/frontend-utils/meta-tags';
import type {IBlogMetadata} from '@/models/mdxFiles';
import BlogContent from '@/modules/blog/BlogContent';
import BlogFooter from '@/modules/blog/BlogFooter';
import BlogHeader from '@/modules/blog/BlogHeader';
import BlogLayout from '@/modules/common/ContentLayout';
import {client} from '@/utils/contentful.utils';
import {blurImage} from '@/utils/image-blur.utils';
import {BLOGS_PATH, getBlogsMetadata} from '@/utils/mdx.utils';
import fs from 'fs';
import matter from 'gray-matter';
import type {Metadata, NextPage} from 'next';
import Script from 'next/script';
import path from 'path';

export const generateMetadata = async ({
  params: {slug},
}: {
  params: {slug: string};
}): Promise<Metadata> => {
  const postFilePath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const {data: blog} = matter(source);
  blog.slug = slug;

  const asset = await client.getAsset(blog.bannerId);

  const bannerUrl = `https:${asset.fields.file?.url}`;

  return {
    ...newCommonMetaTags(blog.title, `/blog/${blog.slug}`),
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords?.join(','),
    openGraph: {
      url: `https://carlogino.com/blog/${blog.slug}`,
      type: 'article',
      title: blog.title,
      description: blog.description,
      images: bannerUrl,
    },
    twitter: {
      title: blog.title,
      description: blog.description,
      images: bannerUrl,
      creator: '@codegino',
      site: '@codegino',
    },
  };
};

const BlogPage: NextPage<{
  params: {
    slug: string;
  };
}> = async ({params: {slug}}) => {
  const {
    frontMatter: blog,
    img,
    svg,
    content,
    scope,
  } = await getStaticProps(slug);

  if (!blog) {
    return (
      <div className="h-[80vh] w-full bg-transparent text-center pt-10">
        <h2>Please wait</h2>
        <h3>Using magic to load content...</h3>
      </div>
    );
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${blog.title}",
            "image": "${blog.bannerId}",
            "editor": "Carlo Gino Catapang",
            "author": "Carlo Gino Catapang",
            "genre": "${blog.tags?.join(' ')}",
            "keywords": "${blog.keywords?.join(' ')}",
            "url": "https://carlogino.com/blog/${blog.slug}",
            "dateCreated": "${blog.date}",
            "dateModified": "${blog.dateUpdated}",
            "description": "${blog.description}",
            "articleBody": "${blog.title}. ${blog.description}"
            }`,
        }}
      ></Script>

      <main role="main">
        <BlogLayout>
          <BlogHeader blog={blog} img={img} svg={svg} />
          <BlogContent content={content} scope={scope} />
          <br />
          <BlogFooter blog={blog} />
        </BlogLayout>
      </main>
    </>
  );
};

const getStaticProps = async (slug: string) => {
  const postFilePath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const {content, data} = matter(source);

  const bannerUrl = blogAssets[slug];
  const {img, svg} = await blurImage(bannerUrl);

  return {
    content,
    scope: data,
    frontMatter: {
      ...data,
      slug,
      bannerId: bannerUrl,
    } as IBlogMetadata,
    img,
    svg,
  };
};

export const generateStaticParams = async () => {
  return (await getBlogsMetadata()).map(meta => {
    return {
      slug: meta.slug,
    };
  });
};

export default BlogPage;
