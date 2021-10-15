import fs from 'fs';
import matter from 'gray-matter';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import {MDXRemote} from 'next-mdx-remote';
import {serialize} from 'next-mdx-remote/serialize';
import Head from 'next/head';
import path from 'path';
import {BlurredImage} from '../../components/BlurredImage';
import BlogLayout from '../../components/blog/BlogLayout';
import {BlogMetadata} from '../../models/blog';
import {BLOGS_PATH} from '../../utils/mdxUtils';
import {getImageFromSupabase} from '../../utils/supabase-image';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
};

export default function BlogPage({
  source,
  frontMatter,
  img,
  svg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlogLayout>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <h2 className="description">{frontMatter.description}</h2>
        )}
        {img && svg ? (
          <BlurredImage
            alt="Hero photo"
            img={img}
            svg={svg}
            layout="responsive"
            height={100}
            width={150}
            blurLevel={80}
            objectFit="cover"
            objectPosition="right"
          />
        ) : null}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </BlogLayout>
  );
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
  const postFilePath = path.join(BLOGS_PATH, `${params?.slug}/index.mdx`);
  const source = fs.readFileSync(postFilePath);

  const {content, data} = matter(source);

  const {img, svg} = await getImageFromSupabase('home_hero_cover');

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
      frontMatter: data as BlogMetadata,
      img,
      svg,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const blogDirectories = path.join(BLOGS_PATH);

  const paths = fs.readdirSync(blogDirectories).map(dir => {
    return {
      params: {
        slug: dir,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
