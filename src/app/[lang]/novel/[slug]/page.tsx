import fs from 'fs';
import matter from 'gray-matter';
import type {Metadata, NextPage} from 'next';
import {serialize} from 'next-mdx-remote/serialize';
import path from 'path';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import type {INovelMetadata} from '@/models/mdxFiles';
import BlogContent from '@/modules/blog/BlogContent';
import BlogHeader from '@/modules/blog/BlogHeader';
import ContentLayout from '@/modules/common/ContentLayout';
import {getNovelsMetadata, NOVELS_PATH} from '@/utils/mdx.utils';
import {client} from '@/utils/contentful.utils';
import {blurImage} from '@/utils/image-blur.utils';
import BlogFooter from '@/modules/blog/BlogFooter';
import {newCommonMetaTags} from '@/frontend-utils/meta-tags';
import Script from 'next/script';
import NovelAudioPlayer from './NovelAudioPlayer';

export const dynamic = 'force-static';

export const generateMetadata = async ({
  params: {slug},
}: {
  params: {slug: string};
}): Promise<Metadata> => {
  const postFilePath = path.join(NOVELS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const {data: novel} = matter(source);
  novel.slug = slug;

  const asset = await client.getAsset(novel.bannerId);

  const bannerUrl = `https:${asset.fields.file?.url}`;

  return {
    ...newCommonMetaTags(novel.title, `/novel/${novel.slug}`),
    title: novel.title,
    description: novel.description,
    keywords: novel.keywords?.join(','),
    openGraph: {
      url: `https://carlogino.com/novel/${novel.slug}`,
      type: 'article',
      title: novel.title,
      description: novel.description,
      images: bannerUrl,
    },
    twitter: {
      title: novel.title,
      description: novel.description,
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
  const {frontMatter: novel, img, source, svg} = await getStaticProps(slug);

  if (!novel) {
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
            "headline": "${novel.title}",
            "image": "${novel.bannerId}",
            "editor": "Carlo Gino Catapang",
            "author": "Carlo Gino Catapang",
            "genre": "${novel.tags?.join(' ')}",
            "keywords": "${novel.keywords?.join(' ')}",
            "url": "https://carlogino.com/blog/${novel.slug}",
            "dateCreated": "${novel.date}",
            "dateModified": "${novel.dateUpdated}",
            "description": "${novel.description}",
            "articleBody": "${novel.title}. ${novel.description}"
            }`,
        }}
      ></Script>

      <main role="main">
        <ContentLayout>
          <BlogHeader blog={novel} img={img} svg={svg} />
          <BlogContent source={source} />
          <br />
          <BlogFooter blog={novel} />
        </ContentLayout>
      </main>
    </>
  );
};

const getStaticProps = async (slug: string) => {
  const postFilePath = path.join(NOVELS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const {content, data} = matter(source);

  const banner = await client.getAsset(data.bannerId);

  const bannerUrl = `https:${banner.fields.file?.url}`;
  const {img, svg} = await blurImage(bannerUrl);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkMdxCodeMeta],
      rehypePlugins: [],
      format: 'mdx',
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: {
      ...data,
      slug,
      bannerId: bannerUrl,
    } as INovelMetadata,
    img,
    svg,
  };
};

export const generateStaticParams = async () => {
  return (await getNovelsMetadata()).map(meta => {
    return {
      slug: meta.slug,
    };
  });
};

export default BlogPage;
