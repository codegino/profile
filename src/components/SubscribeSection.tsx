import React from 'react';
import styled from '@emotion/styled';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import Script from 'next/script';
import Button from './basic/Button';
import Input from './basic/Input';

const SubscribeSection = () => {
  return (
    <Container>
      <MessageContainer>
        <h2>Stay up to date🚀</h2>
        <h3>
          Subscribe to my newsletter, and you&lsquo;ll be the first to know my
          latest content📰.
        </h3>
        <h4>
          No spam
          <RiSpamLine size={25} />. Unsubscribe anytime.
          <BiCool size={25} />
        </h4>
      </MessageContainer>
      <Script
        strategy="beforeInteractive"
        src="https://sendfox.com/js/form.js"
      ></Script>
      <Form
        method="post"
        action="https://sendfox.com/form/m2xeq6/1j27oq"
        className="sendfox-form"
        id="1j27oq"
        data-async="true"
        data-recaptcha="true"
      >
        <Input
          type="text"
          placeholder="First Name"
          name="first_name"
          style={{marginBottom: 'var(--spacing-very-small)'}}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          required
          style={{marginBottom: 'var(--spacing-small)'}}
        />
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
          <input
            type="text"
            name="a_password"
            tabIndex={-1}
            value=""
            autoComplete="off"
          />
        </div>
        <Button type="submit">Sign up</Button>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  margin-top: var(--spacing-medium);
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 45rem;

  > p {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: var(--spacing-big);
    font-size: 3em;
  }

  h3 {
    margin-bottom: var(--spacing-medium);
    font-size: 2em;
  }

  h4 {
    font-size: 1.5em;
  }
`;

const Container = styled.section`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default SubscribeSection;
