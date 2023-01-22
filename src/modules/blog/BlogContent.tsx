import type {FunctionComponent, ReactNode, ComponentProps} from 'react';
import {MDXRemote} from 'next-mdx-remote';
import type {MDXRemoteSerializeResult} from 'next-mdx-remote';
import ContentAnchor from '../common/AnchorTag';
import ContentBlockQuote from '../common/BlockquoteTag';
import ContentBookMark from '../common/BookmarkElement';
import ContentCodeBlock from '../common/CodeBlockElement';
import GifElement from '../common/GifElement';
import ContentImage from '../common/ImageTag';
import ContentListElement from '../common/ListElementTag';
import ContentParagraph from '../common/ParagraphTag';
import TableOfContents from './TableOfContents';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components: ComponentProps<FunctionComponent> = {
  inlineCode: ({children}: {children: JSX.Element}) => <code>{children}</code>,
  blockquote: ContentBlockQuote,
  Anchor: ContentAnchor,
  a: ContentAnchor,
  Gif: GifElement,
  p: ContentParagraph,
  li: ContentListElement,
  Img: ContentImage,
  Bookmark: ContentBookMark,
  TableOfContents: TableOfContents,
  pre: ContentCodeBlock,
};

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const BlogContent: FunctionComponent<Props> = ({source}) => {
  return <MDXRemote {...source} components={components} lazy={false} />;
};

export default BlogContent;
