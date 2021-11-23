import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import {underlineOnHover} from '../../frontend-utils/animation-effects';

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
    <Container>
      <LabelContainer>
        {fileName ? fileName : ''}
        {languageLabel}
      </LabelContainer>
      <Highlight
        {...defaultProps}
        theme={vsDark}
        code={children.trim()}
        language={language}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <>
            <LineNumberContainer>
              {tokens.map((_, i) => {
                return !noLine ? <LineNo key={i}>{i + 1}</LineNo> : null;
              })}
            </LineNumberContainer>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line
                  key={i}
                  {...getLineProps({line, key: i})}
                  style={{
                    marginLeft: noLine ? '0' : '2.5rem',
                  }}
                >
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          </>
        )}
      </Highlight>
      {codePenID && (
        <LinkToCodePen>
          <Link href={`https://codepen.io/codegino/pen/${codePenID}`}>
            <a target="_blank" rel="noopener">
              Link to Codepen
            </a>
          </Link>
        </LinkToCodePen>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const LinkToCodePen = styled.div`
  > a {
    ${underlineOnHover('var(--color-primary-dark)')}
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
  position: relative;
`;

const LineNumberContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 3.259rem;
  bottom: 0;
  line-height: 1.188;
`;

const LineNo = styled.span`
  background-color: #1e1e1e;
  padding-left: 2px;
  color: #e1e1e1;
  text-align: right;
  font-family: monospace;
  padding-right: 1em;
  user-select: none;
  min-width: 3.5rem;
  max-width: 3.5rem;
  line-height: 1.188;
`;

const LineContent = styled.span`
  display: table-cell;
`;

export default CodeBlock;
