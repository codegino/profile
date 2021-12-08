import React from 'react';
import {BiCool} from '@react-icons/all-files/bi/BiCool';
import {RiSpamLine} from '@react-icons/all-files/ri/RiSpamLine';
import Script from 'next/script';
import Button from './basic/Button';
import Input from './basic/Input';

const SubscribeForm = () => {
  return (
    <>
      <style jsx global>{`
        .grecaptcha-badge {
          visibility: hidden;
        }
      `}</style>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl ">
          <h2 className="my-8 text-6xl">Stay up to date🚀</h2>
          <h3 className="mb-8 text-3xl">
            Subscribe to my newsletter, and you&lsquo;ll be the first to know my
            latest content📰.
          </h3>
          <h4>
            No spam
            <RiSpamLine size={25} />. Unsubscribe anytime.
            <BiCool size={25} />
          </h4>
        </div>
        <Script
          strategy="beforeInteractive"
          src="https://sendfox.com/js/form.js"
        ></Script>
        <form
          method="post"
          action="https://sendfox.com/form/m2xeq6/1j27oq"
          className="sendfox-form relative mt-8 shadow-lg overflow-hidden bg-light w-full
          max-w-3xl min-w-3xl mb-24 rounded-2xl border-primary-dark border"
          id="1j27oq"
          data-async="true"
          data-recaptcha="true"
        >
          <div
            className="flex justify-center bg-primary-dark h-16 py-8 items-center
          "
          >
            <p className="text-light text-3xl">Get started</p>
          </div>
          <div className="flex flex-col py-8 px-4 bg-light">
            <Input
              type="text"
              placeholder="First Name"
              name="first_name"
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
            <div aria-hidden="true" className="sendfox-recaptcha">
              <input
                type="text"
                name="a_password"
                tabIndex={-1}
                defaultValue=""
                autoComplete="off"
                className="absolute -left-full"
              />
            </div>
            <Button type="submit" className="text-4xl font-bold">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;
