import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Button = styled.span`
  line-height: 2;
  height: 5rem;
  color: #ffffff;
  background-color: orangered;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem;
  font-size: 2rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(180, 190, 190, 0.5);
  transition: 0.3s all linear;
  font-family: cursive;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(180, 190, 190, 0.5);
    opacity: 0.85;
    color: #ffffff;
  }
`;

const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 15px;
  font-size: 2rem;
  vertical-align: middle;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: var(--margin-small);
`;

function Coffee() {
  return (
    <Container>
      <Link href="https://www.buymeacoffee.com/codegino">
        <a target="_blank" aria-label="Buy me a coffee">
          <Button>
            <Image
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a coffee"
            />
            <Text>Buy me a coffee</Text>
          </Button>
        </a>
      </Link>
    </Container>
  );
}

export default Coffee;
