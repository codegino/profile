'use client';
import type {FunctionComponent, ComponentProps} from 'react';
import ContentAnchor from '../common/AnchorTag';
import ContentBlockQuote from '../common/BlockquoteTag';
import ContentBookMark from '../common/BookmarkElement';
import ContentCodeBlock from '../common/CodeBlockElement';
import ContentImage from '../common/ImageTag';
import ContentListElement from '../common/ListElementTag';
import ContentParagraph from '../common/ParagraphTag';
import TableOfContents from './TableOfContents';
import {MDX} from '@/components/mdx';
import rehypeMdxCodeProps from 'rehype-mdx-code-props'


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
    <MDX
      useMDXComponents={() => components}
      source={content}
      rehypePlugins={[rehypeMdxCodeProps]}
      remarkPlugins={[]}
    />
  );
}

export default BlogContent;
