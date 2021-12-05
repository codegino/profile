import React from 'react';
import styled from '@emotion/styled';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import Script from 'next/script';
import Button from './basic/Button';
import Input from './basic/Input';

const SubscribeForm = () => {
  return (
    <>
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
        <FormHeader>
          <p>Get started</p>
        </FormHeader>
        <FormContent>
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
          <div
            style={{position: 'absolute', left: '-5000px'}}
            aria-hidden="true"
          >
            <input
              type="text"
              name="a_password"
              tabIndex={-1}
              defaultValue=""
              autoComplete="off"
            />
          </div>
          <Button type="submit">Sign up</Button>
        </FormContent>
      </Form>
    </>
  );
};

const Form = styled.form`
  box-sizing: border-box;
  margin-top: var(--spacing-medium);
  border: 1px solid var(--color-light);
  border-radius: 1rem;
  box-shadow: 1px 1px 2px var(--color-primary-dark);
  overflow: hidden;

  background-color: var(--color-light-light);
  width: 100%;
  max-width: 45rem;
  min-width: 30rem;
  min-height: 19rem;
  margin-bottom: var(--spacing-big);
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-medium) var(--spacing-small);
  background-color: var(--color-light);

  > button {
    font-size: 1.5em;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  position: relative;
  background-color: var(--color-primary-dark);
  height: 4rem;
  padding-top: var(--spacing-small);
  border-bottom: 1px solid var(--color-primary-dark);

  > p {
    color: var(--color-light-light);
  }
`;

const MessageContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 45rem;

  > p {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: var(--spacing-medium);
  }

  h3 {
    margin-bottom: var(--spacing-small);
  }
`;

export default SubscribeForm;
