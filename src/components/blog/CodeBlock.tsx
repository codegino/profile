import React, {FunctionComponent} from 'react';
import Link from 'next/link';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import {ClipboardCopyButton} from '../ClipboardCopyButton';

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
    <div className="relative my-4">
      <aside
        className="
        text-right w-full pl-2 pr-1 top-1 h-9 relative flex justify-between text-primary-dark
        bg-light rounded-tr-lg rounded-tl-lg
        "
      >
        <span className="inline-block text-ellipsis whitespace-nowrap overflow-hidden">
          {fileName ? fileName : ''}
          {languageLabel}
        </span>
        <ClipboardCopyButton value={children} />
      </aside>
      <Highlight
        {...defaultProps}
        theme={vsDark}
        code={children.trim()}
        language={language}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <>
            <div className="absolute z-10 flex flex-col left-0 top-14 bottom-0">
              {tokens.map((_, i) => {
                return !noLine ? (
                  <span
                    className="bg-code pl-2 pr-4 text-white text-right leading-code
                    max-w-line-number mi-w-line-number select-none
                    "
                    key={i}
                  >
                    {i + 1}
                  </span>
                ) : null;
              })}
            </div>
            <pre
              className={
                'p-3 overflow-auto flex relative flex-col leading-code my-1 text-2xl ' +
                ' rounded-bl-md rounded-br-md' +
                className
              }
              style={style}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({line, key: i})}
                  style={{
                    display: 'table-row',
                    position: 'relative',
                    marginLeft: noLine ? '0' : '2.5rem',
                  }}
                >
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          </>
        )}
      </Highlight>
      {codePenID && (
        <div>
          <Link href={`https://codepen.io/codegino/pen/${codePenID}`}>
            <a
              target="_blank"
              rel="noopener nofollow"
              className="underline-on-hover underline-dark"
            >
              Link to Codepen
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
