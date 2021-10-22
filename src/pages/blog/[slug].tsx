import fs from 'fs';
import matter from 'gray-matter';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import {serialize} from 'next-mdx-remote/serialize';
import path from 'path';
import {getPlaiceholder} from 'plaiceholder';
import BlogContent from '../../components/blog/BlogContent';
import BlogFooter from '../../components/blog/BlogFooter';
import BlogHeader from '../../components/blog/BlogHeader';
import BlogLayout from '../../components/blog/BlogLayout';
import {BlogMetadata} from '../../models/blog';
import {formatDate} from '../../utils/date-formatter';
import {BLOGS_PATH, getBlogsMetadata} from '../../utils/mdxUtils';

export default function BlogPage({
  source,
  frontMatter,
  img,
  svg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlogLayout>
      <BlogHeader blogMetadata={frontMatter} img={img} svg={svg} />
      <BlogContent source={source} />
      <BlogFooter />
    </BlogLayout>
  );
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
  const postFilePath = path.join(BLOGS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const {content, data} = matter(source);

  const {img, svg} = await getPlaiceholder(`${data.bannerId}`);

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
      } as BlogMetadata,
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
