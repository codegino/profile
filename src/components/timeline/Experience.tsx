import React from 'react';
import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {mediaQuery} from '../../utils/media-query';

export const Experience: React.FC<{hasConnector?: boolean}> = ({
  children,
  hasConnector = false,
}) => {
  return (
    <Container>
      <div
        className={`'connector ${
          hasConnector ? 'connector--visible' : 'connector--hidden'
        }`}
      >
        &nbsp;
      </div>
      <div className={`content`}>{children}</div>
    </Container>
  );
};

const appear = keyframes`
  0% {opacity: 0;}
  70%  {opacity: 0;}
  90%  {opacity: 0.1;}
  100% {opacity: 1;}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  margin-bottom: 2rem;
  border: 1px solid var(--light-gray-2);
  border-left: none;
  border-right: none;

  ${mediaQuery(
    800,
    `
      border: 1px solid var(--light-gray-2);
    `,
  )}

  .content {
    padding: 1rem;
    height: 100%;
    width: 100%;
  }

  .connector {
    &--visible {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-dark);
      width: 0.25rem;
      height: 2.5rem;
      position: absolute;
      top: -2.25rem;
      animation: ${appear} 1s;

      ::before {
        content: '';
        width: 0.75rem;
        height: 0.75rem;
        position: absolute;
        background-color: var(--color-primary);
        border-radius: 50%;
      }
    }

    &--hidden {
      display: none;
    }
  }

  text-align: center;

  .date {
    font-weight: 0.8em;
    font-style: italic;
  }

  .name {
    font-size: 1.5em;
    font-weight: bold;
  }

  .title {
    font-weight: bold;
  }
`;
