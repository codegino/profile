import React from 'react';
import styled from '@emotion/styled';
import SubscribeForm from './SubscribeForm';

const SubscribeSection = () => {
  return (
    <Container>
      <Shape1 />
      <Shape2 />
      <SubscribeForm />
    </Container>
  );
};

const Shape1 = styled.div`
  position: absolute;
  height: 5rem;
  width: 5rem;
  top: 0;
  right: 0;
  transform: skew(45deg) translateX(50%);
  background-color: var(--color-primary-dark);
  border-left: 1rem solid var(--color-primary-light);
`;

const Shape2 = styled.div`
  position: absolute;
  height: 5rem;
  width: 5rem;
  bottom: 0;
  left: 0;
  transform: skew(230deg) translateX(-60%);
  background-color: var(--color-primary-light);
  border-right: 1rem solid var(--color-primary-dark);
`;

const Container = styled.section`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--color-light);
  overflow: hidden;
`;

export default SubscribeSection;
