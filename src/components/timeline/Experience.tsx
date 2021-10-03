import React from 'react';
import styled from '@emotion/styled';

export const Experience = ({children}: {children: any}) => {
  return (
    <Container>
      <div className="connector">&nbsp;</div>
      <div className="content">{children}</div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  margin-bottom: 2rem;
  border: 1px solid black;

  .content {
    padding: 1rem;
    height: 100%;
    width: 100%;
  }

  :not(:first-of-type) {
    .connector {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      width: 0.25rem;
      height: 2.5rem;
      position: absolute;
      top: -2.25rem;

      ::before {
        content: '';
        width: 0.75rem;
        height: 0.75rem;
        position: absolute;
        background-color: red;
        border-radius: 50%;
      }
    }
  }

  :first-of-type {
    .connector {
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
