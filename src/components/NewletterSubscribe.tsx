import React from 'react';

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
}

interface SubscribeFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const NewletterSubscribe = () => {
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
      .then(() => {
        alert('Subscribed!');
      })
      .catch(() => {
        alert('Error!');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        type="text"
        placeholder="Enter your first name"
        required
        minLength={2}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Enter your last name"
        required
        minLength={2}
      />
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewletterSubscribe;
