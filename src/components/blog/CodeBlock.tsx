import React from 'react';
import styled from '@emotion/styled';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import {mediaQuery} from '../../utils/media-query';

export type CodeBlockProps = {
  children: string;
  className: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({children, className}) => {
  const language = className.replace(/language-/, '') as Language;

  return (
    <>
      <Highlight {...defaultProps} code={children.trim()} language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Pre
            className={className}
            style={{
              ...style,
            }}
          >
            <LabelContainer>{language}</LabelContainer>
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

const Pre = styled.pre`
  padding: 20px;
  overflow: auto;
  display: flex;
  width: 100vw;
  position: relative;
  flex-direction: column;

  ${mediaQuery(600, `width: 90vw;`)}

  ${mediaQuery(900, `width: 75vw;`)}

  ${mediaQuery(1200, `width: 50vw;`)}
`;

const LabelContainer = styled.aside`
  color: white;
  width: 100%;
  text-align: right;
  right: 15px;
  top: 5px;
  height: 0;
  position: absolute;

  ${mediaQuery(900, `right: 5px;`)}
`;

export default CodeBlock;
