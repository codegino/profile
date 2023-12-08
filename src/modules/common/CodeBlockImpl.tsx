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
        ring-1 ring-neutral-200 dark:ring-neutral-800 file:bg-neutral-100 text-right w-full pl-2 pr-1 top-1 h-6 relative flex justify-between rounded-tr-lg rounded-tl-lg
        "
          >
            <span className="inline-block text-ellipsis whitespace-nowrap overflow-hidden text-neutral-700 dark:text-neutral-300">
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
                <span className="absolute z-10 flex flex-col left-0 top-0 pt-2 bottom-0 rounded-md">
                  {tokens.map((_, i) => (
                    <span
                      className="bg-[#1e1e1e] pl-2 pr-3 text-white text-right leading-[1.188]
                    max-w-[2rem] min-w-[2rem] select-none
                    "
                      key={i}
                    >
                      {i + 1}
                      {add && addedLines.has(i + 1) && (
                        <span className="w-[4.25ch] inline-block absolute left-0 text-right text-green-400">
                          +
                        </span>
                      )}
                      {del && removedLines.has(i + 1) && (
                        <span className="w-[4.25ch] inline-block absolute left-0 text-right text-red-400">
                          -
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              )}

              <span
                className={clsx(
                  'p-2 pl-2 overflow-auto flex relative flex-col leading-[1.188] my-1 text-lg',
                  'rounded-bl-md rounded-br-md shadow-sm shadow-black no-scrollbar',
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
