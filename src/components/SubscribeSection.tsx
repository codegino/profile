import React from 'react';
import styled from '@emotion/styled';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import {useRouter} from 'next/router';
import Button from './basic/Button';
import Input from './basic/Input';

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
}

interface SubscribeFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const SubscribeSection = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<SubscribeFormElement>) => {
    e.preventDefault();

    const {firstName, email, lastName} = e.currentTarget.elements;

    const body = {
      firstName: firstName?.value ?? undefined,
      lastName: lastName?.value ?? undefined,
      email: email?.value ?? undefined,
    };

    fetch('/api/newsletter/subscribe', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res => {
        if (res.id && res.email && res.first_name) {
          router.push('/signup-success');
        } else {
          alert(res.message);
        }
      })
      .catch(() => {
        alert('Error!');
      });
  };

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
      <Form onSubmit={handleSubmit}>
        <Input
          name="firstName"
          type="text"
          placeholder="Enter your first name"
          required
          minLength={2}
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
        />
        <Button style={{marginTop: 'var(--spacing-small)'}} type="submit">
          Sign up
        </Button>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  margin-top: var(--spacing-medium);
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div`
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
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default SubscribeSection;
