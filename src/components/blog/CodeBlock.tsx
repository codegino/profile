import React from 'react';
import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import Highlight, {defaultProps} from 'prism-react-renderer';
import type {Language} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import ClipboardCopyButton from '../ClipboardCopyButton';
import NextLink from '../basic/NextLink';

export type CodeBlockProps = {
  children: string;
  className: string;
  live: boolean;
  noLine: boolean;
  noInline: boolean;
  codePenID: string;
  fileName: string;
};

const executableExtensions = ['js', 'jsx', 'ts', 'tsx', 'html', 'css'];

const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  children,
  className,
  noLine = false,
  codePenID,
  fileName,
}) => {
  const language = className.replace(/language-/, '') as Language;

  const languageLabel = executableExtensions.some(ext => ext === language)
    ? `.${language}`
    : language;

  return (
    <code className="relative my-4">
      <span
        className="
        text-right w-full pl-2 pr-1 top-1 h-5 relative flex justify-between text-primary-dark
        bg-light rounded-tr-lg rounded-tl-lg
        "
      >
        <span className="inline-block text-ellipsis whitespace-nowrap overflow-hidden">
          {fileName ? fileName : ''}
          {languageLabel}
        </span>
        <ClipboardCopyButton value={children} />
      </span>
      <Highlight
        {...defaultProps}
        theme={vsDark}
        code={children.trim()}
        language={language}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <>
            {!noLine && (
              <span className="absolute z-10 flex flex-col left-0 top-6 pt-2 bottom-0 bg-[#1e1e1e]">
                {tokens.map((_, i) => (
                  <span
                    className="bg-[#1e1e1e] pl-2 pr-3 text-white text-right leading-[1.188]
                    max-w-[2rem] min-w-[2rem] select-none
                    "
                    key={i}
                  >
                    {i + 1}
                  </span>
                ))}
              </span>
            )}

            <span
              className={clsx(
                'p-2 pl-2 overflow-auto flex relative flex-col leading-[1.188] my-1 text-lg',
                'rounded-bl-md rounded-br-md',
                className,
                {
                  'pl-8': !noLine,
                },
              )}
              style={style}
            >
              {tokens.map((line, i) => (
                <span key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </span>
              ))}
            </span>
          </>
        )}
      </Highlight>
      {codePenID && (
        <samp>
          <NextLink
            href={`https://codepen.io/codegino/pen/${codePenID}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline-on-hover underline-dark"
          >
            Link to Codepen
          </NextLink>
        </samp>
      )}
    </code>
  );
};

export default React.memo(CodeBlock);
