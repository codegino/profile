'use client';
import type {FunctionComponent, ComponentProps} from 'react';
import {MDXRemote} from 'next-mdx-remote/rsc';
import ContentAnchor from '../common/AnchorTag';
import ContentBlockQuote from '../common/BlockquoteTag';
import ContentBookMark from '../common/BookmarkElement';
import ContentCodeBlock from '../common/CodeBlockElement';
import ContentImage from '../common/ImageTag';
import ContentListElement from '../common/ListElementTag';
import ContentParagraph from '../common/ParagraphTag';
import TableOfContents from './TableOfContents';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components: ComponentProps<FunctionComponent> = {
  inlineCode: ({children}: {children: JSX.Element}) => <code>{children}</code>,
  blockquote: ContentBlockQuote,
  Anchor: ContentAnchor,
  a: ContentAnchor,
  p: ContentParagraph,
  li: ContentListElement,
  Img: ContentImage,
  Bookmark: ContentBookMark,
  TableOfContents: TableOfContents,
  pre: ContentCodeBlock,
};

type Props = {
  content: string;
  scope: Record<string, unknown> | undefined;
};

function BlogContent({content, scope}: Props) {
  return (
    <MDXRemote
      components={components}
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMdxCodeMeta],
          rehypePlugins: [],
          format: 'mdx',
        },
        scope,
      }}
    />
  );
}

export default BlogContent;
