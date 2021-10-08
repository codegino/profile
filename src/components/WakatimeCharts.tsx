import React from 'react';
import styled from '@emotion/styled';
import {Zoom} from 'react-awesome-reveal';

export default function WakatimeCharts() {
  return (
    <Container>
      <Zoom triggerOnce>
        <figure>
          <embed src="https://wakatime.com/share/@codegino/aa8c74ed-2174-445a-805d-e46a869c3b8b.svg"></embed>
        </figure>
      </Zoom>
      <Zoom triggerOnce>
        <figure>
          <embed src="https://wakatime.com/share/@codegino/e7ca5c4c-67a6-47fc-a3c6-e020cb97b66b.svg"></embed>
        </figure>
      </Zoom>
    </Container>
  );
}

const Container = styled.div`
  max-width: 50rem;
  margin: auto;
  overflow: hidden;
`;
