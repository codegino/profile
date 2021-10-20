import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';

export type CodeBlockProps = {
  children: string;
  className: string;
  live: boolean;
};

const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  children,
  className,
  live,
}) => {
  const language = className.replace(/language-/, '') as Language;

  if (live) {
    return (
      <>
        <LabelContainer style={{top: '0'}}>
          <div>.{language}</div>
          <span style={{fontSize: '1.4rem'}}>Editable</span>
        </LabelContainer>
        <div style={{marginTop: '0'}}>
          <LiveProvider code={children} theme={vsDark}>
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
      <LabelContainer>.{language}</LabelContainer>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={vsDark}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Pre
            className={className}
            style={{
              ...style,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </>
  );
};

const LiveEditorContainer = styled(LiveEditor)`
  border-radius: 0px 0px 5px 5px;

  span {
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    font-size: 1.4rem;
  }
`;

const Pre = styled.pre`
  padding: 10px;
  overflow: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 0px 0px 5px 5px;

  span {
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    font-size: 1.4rem;
  }
`;

const PreviewContainer = styled.div`
  margin: var(--margin-very-small) 0;
  border: 1px solid var(--color-light-dark);
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
  top: 15px;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  color: var(--color-primary-dark);
  background-color: var(--color-light);
  border-radius: 5px 5px 0px 0px;
`;

export default CodeBlock;
