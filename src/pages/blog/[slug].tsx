import fs from 'fs';
import matter from 'gray-matter';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import {serialize} from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import path from 'path';
import BlogContent from '../../components/blog/BlogContent';
import BlogHeader from '../../components/blog/BlogHeader';
import BlogLayout from '../../components/blog/BlogLayout';
import type {IBlogMetadata} from '../../models/blog';
import {formatDate} from '../../utils/date-formatter';
import {blurImage} from '../../utils/image-blur.utils';
import {getBlogsMetadata} from '../../utils/mdxUtils';
import {BLOGS_PATH} from '../../utils/mdxUtils';

const BlogFooter = dynamic(() => import('../../components/blog/BlogFooter'), {
  ssr: false,
});

export default function BlogPage({
  source,
  frontMatter: blog,
  img,
  svg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="keywords" content={blog.keywords?.join(',')} />
        <meta
          property="og:url"
          content={`https://codegino.com/blog/${blog.slug}`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.bannerId} />

        <meta name="description" content={blog.description} />

        <meta name="twitter:image" content="/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={blog.bannerId} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:title" content="Carlo Gino Catapang" />
      </Head>

      <BlogLayout>
        <BlogHeader blog={blog} img={img} svg={svg} />
        <BlogContent source={source} />
        <br />
        <BlogFooter blog={blog} />
      </BlogLayout>
    </>
  );
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
  const postFilePath = path.join(BLOGS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const {content, data} = matter(source);

  const {img, svg} = await blurImage(data.bannerId);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        ...data,
        slug: params?.slug,
        date: formatDate(new Date(data.date)),
      } as IBlogMetadata,
      img,
      svg,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getBlogsMetadata()).map(meta => {
    return {
      params: {
        slug: meta.slug,
      },
    };
  });

  return {
    paths,

    fallback: false,
  };
};
