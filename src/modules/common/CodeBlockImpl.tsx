import {memo} from 'react';
import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import {Highlight, themes} from 'prism-react-renderer';
import type {Language} from 'prism-react-renderer';
import ClipboardCopyButton from '../../components/ClipboardCopyButton';
import NextLink from '../../components/basic/NextLink';

export type CodeBlockProps = {
  children: string;
  className: string;
  noLine: boolean;
  noExt: boolean;
  noInline: boolean;
  noHeader: boolean;
  codePenID: string;
  fileName: string;
  add: string;
  del: string;
};

const executableExtensions = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'html',
  'css',
  'json',
  'diff',
];

const CodeBlockImpl: FunctionComponent<CodeBlockProps> = ({
  noLine = false,
  noExt = false,
  noHeader = false,
  codePenID,
  fileName,
  children,
  className,
  add,
  del,
}) => {
  const language = className.replace(/language-/, '') as Language;

  const languageLabel = executableExtensions.some(ext => ext === language)
    ? `.${language}`
    : language;

  const addedLines = new Set<number>();
  const removedLines = new Set<number>();

  if (add) {
    for (const line of add.split(',')) {
      const [start, end] = line.split('-').map(Number);
      if (start && end) {
        for (let i = start; i <= end; i++) {
          addedLines.add(i);
        }
      } else {
        addedLines.add(start);
      }
    }
  }

  if (del) {
    for (const line of del.split(',')) {
      const [start, end] = line.split('-').map(Number);
      if (start && end) {
        for (let i = start; i <= end; i++) {
          removedLines.add(i);
        }
      } else {
        removedLines.add(start);
      }
    }
  }

  return (
    <>
      <code className="relative my-2">
        {!noHeader && (
          <span
            className="
        relative top-1 flex h-6 w-full justify-between rounded-t-lg pl-2 pr-1 text-right ring-1 ring-neutral-200 file:bg-neutral-100 dark:ring-neutral-800
        "
          >
            <span className="inline-block truncate text-neutral-700 dark:text-neutral-300">
              {fileName ? fileName : ''}
              {!noExt && languageLabel}
            </span>
            <ClipboardCopyButton value={children} />
          </span>
        )}
        <Highlight
          theme={themes.vsDark}
          code={children.trim()}
          language={language}
        >
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <div className="relative">
              {!noLine && (
                <span className="absolute inset-y-0 left-0 z-10 flex flex-col rounded-md pt-2">
                  {tokens.map((_, i) => (
                    <span
                      className="min-w-8 max-w-8 select-none bg-[#1e1e1e] pl-2 pr-3
                    text-right leading-[1.188] text-white
                    "
                      key={i}
                    >
                      {i + 1}
                      {add && addedLines.has(i + 1) && (
                        <span className="absolute left-0 inline-block w-[4.25ch] text-right text-green-400">
                          +
                        </span>
                      )}
                      {del && removedLines.has(i + 1) && (
                        <span className="absolute left-0 inline-block w-[4.25ch] text-right text-red-400">
                          -
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              )}

              <span
                className={clsx(
                  'relative my-1 flex flex-col overflow-auto p-2 text-lg leading-[1.188]',
                  'no-scrollbar rounded-b-md shadow-sm shadow-black',
                  className,
                  {
                    'pl-8': !noLine,
                    'ml-3': add || del,
                  },
                )}
                style={style}
              >
                {tokens.map((line, i) => (
                  <span {...getLineProps({line, key: i})} key={i}>
                    {line.map((token, key) => (
                      <span
                        {...getTokenProps({token, key})}
                        key={key}
                        className={clsx({
                          '!text-green-400': add && addedLines.has(i + 1),
                          '!text-red-400': del && removedLines.has(i + 1),
                        })}
                      />
                    ))}
                  </span>
                ))}
              </span>
            </div>
          )}
        </Highlight>
      </code>
      {codePenID && (
        <div>
          <NextLink
            href={`https://codepen.io/codegino/pen/${codePenID}`}
            target="_blank"
            rel="noreferrer"
            className="underline-on-hover underline-dark"
          >
            Link to Codepen
          </NextLink>
        </div>
      )}
    </>
  );
};

export default memo(CodeBlockImpl);
