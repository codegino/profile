import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';

export type CodeBlockProps = {
  children: string;
  className: string;
  live: boolean;
  noLine: boolean;
  noInline: boolean;
};

const executableExtensions = ['js', 'jsx', 'ts', 'tsx', 'html', 'css'];

const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  children,
  className,
  live,
  noLine = true,
  noInline = false,
}) => {
  const language = className.replace(/language-/, '') as Language;

  const languageLabel = executableExtensions.some(ext => ext === language)
    ? `.${language}`
    : language;

  if (live) {
    return (
      <>
        <LabelContainer style={{top: '2px'}}>
          <div>{languageLabel}</div>
          <span style={{fontSize: '1.4rem'}}>Editable</span>
        </LabelContainer>
        <div style={{marginTop: '0'}}>
          <LiveProvider code={children} theme={vsDark} noInline={noInline}>
            <LiveEditorContainer />
            <LiveError />
            <p className="result-label">Result:</p>
            <PreviewContainer>
              <LivePreview />
            </PreviewContainer>
          </LiveProvider>
        </div>
      </>
    );
  }

  return (
    <>
      <LabelContainer>{languageLabel}</LabelContainer>
      <Highlight
        {...defaultProps}
        theme={vsDark}
        code={children.trim()}
        language={language}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({line, key: i})}>
                {!noLine ? <LineNo>{i + 1}</LineNo> : null}
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </>
  );
};

const LiveEditorContainer = styled(LiveEditor)`
  border-radius: 0px 0px 5px 5px;
  margin: var(--margin-very-small) 0;

  span {
    line-height: 1;
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
  }
`;

const Pre = styled.pre`
  padding: 10px;
  overflow: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 0px 0px 5px 5px;
  font-size: 1.5rem;
  margin: var(--margin-very-small) 0;

  span {
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
  }
`;

const PreviewContainer = styled.div`
  margin: var(--margin-very-small) 0;
  border: 1px solid var(--color-light-dark);
  background-color: var(--color-light);
  border-radius: 2px;
  padding: var(--padding-very-small) var(--padding-small);

  .result-label {
    margin-bottom: var(--margin-very-small);
    position: relative;
    left: -10px;
  }
`;

const LabelContainer = styled.aside`
  text-align: left;
  width: 100%;
  padding-left: 7px;
  padding-right: 5px;
  top: 3px;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  color: var(--color-primary-dark);
  background-color: var(--color-light);
  border-radius: 5px 5px 0px 0px;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  min-width: 3rem;
  max-width: 3rem;
`;

const LineContent = styled.span`
  display: table-cell;
`;

export default CodeBlock;
