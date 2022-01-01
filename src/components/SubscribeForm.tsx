import {useState} from 'react';
import type {FormEvent} from 'react';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import {useRouter} from 'next/router';
import Button from './basic/Button';
import Input from './basic/Input';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
}
interface SubscribeFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const SubscribeForm = () => {
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<SubscribeFormElement>) => {
    e.preventDefault();
    const {email, name} = e.currentTarget.elements;

    fetch('/api/newsletter', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      credentials: 'same-origin',
      body: JSON.stringify({
        email: email.value,
        name: name.value,
      }),
    })
      .then(async (res: any) => {
        const body = await res.json();
        if (res.status >= 400 && res.status < 600) {
          throw new Error(body.message);
        }
        return body;
      })
      .then(() => {
        router.push('/signup-success');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <>
      <div className="h-screen min-h-[40rem] px-2 w-full flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl ">
          <h2 className="my-8 text-4xl">Stay up to date 🚀</h2>
          <h3 className="mb-8 text-2xl">
            Subscribe to my newsletter, and you&lsquo;ll be the first to know my
            latest content 📰.
          </h3>
          <h4>
            No spam
            <RiSpamLine size={25} />. Unsubscribe anytime.
            <BiCool size={25} />
          </h4>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative mt-8 shadow-sm shadow-dark overflow-hidden bg-light w-full
          max-w-2xl min-w-2xl mb-24 rounded-2xl min-h-[20rem]"
          id="1j27oq"
        >
          <div
            className="flex justify-center bg-primary-dark py-2 items-center
          "
          >
            <p className="text-light text-xl">Get started</p>
          </div>
          <div className="flex flex-col py-8 px-4 bg-light">
            <Input
              type="text"
              placeholder="First Name"
              name="name"
              className="mb-4"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="mb-8"
            />
            <div aria-hidden="true">
              <input
                type="text"
                name="a_password"
                tabIndex={-1}
                defaultValue=""
                autoComplete="off"
                className="absolute -left-full"
              />
            </div>
            {error && (
              <div className="w-full text-center text-red-500 font-bold mb-2">
                {error}
              </div>
            )}
            <Button type="submit" className="text-2xl font-bold">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;
