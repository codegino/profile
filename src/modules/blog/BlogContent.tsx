import type {FunctionComponent, ReactNode, ComponentProps} from 'react';
import {MDXRemote} from 'next-mdx-remote';
import type {MDXRemoteSerializeResult} from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import BlockQuote from './BlockQuote';
import BlogAnchor from './BlogAnchor';
import BlogBookMark from './BlogBookmarkAnchor';
import BlogGif from './BlogGif';
import BlogImg from './BlogImg';
import BlogListElement from './BlogListElement';
import BlogParagraph from './BlogParagraph';
import {preToCodeBlock} from './PreToCodeBlock';
import TableOfContents from './TableOfContents';

const CodeBlock = dynamic(() => import('./CodeBlock'), {
  ssr: false,
});

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components: ComponentProps<FunctionComponent> = {
  inlineCode: ({children}: {children: JSX.Element}) => <code>{children}</code>,
  blockquote: BlockQuote,
  Anchor: BlogAnchor,
  a: BlogAnchor,
  p: BlogParagraph,
  li: BlogListElement,
  Gif: BlogGif,
  Img: BlogImg,
  Bookmark: BlogBookMark,
  TableOfContents: TableOfContents,
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return (
        <pre>
          <CodeBlock {...props} />
        </pre>
      );
    } else {
      return <pre {...preProps} />;
    }
  },
};

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const BlogContent: FunctionComponent<Props> = ({source}) => {
  return <MDXRemote {...source} components={components} lazy={false} />;
};

export default BlogContent;
